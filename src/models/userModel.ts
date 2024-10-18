import { model, Schema, InferSchemaType } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Response } from 'express';
import cookieOptions from '../config/cookieOptions';

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    suffix: {
      type: String,
      required: false,
      default: null,
    },
    isVerified: {
      type: Boolean,
      required: false,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

interface IUser extends InferSchemaType<typeof userSchema> {
  generateTokenAndSetCookie: (res: Response) => string;
}

userSchema.methods.generateTokenAndSetCookie = function (res: Response): string {
  const token = jwt.sign({ userId: this._id }, process.env.JWT_SECRET as string);
  res.cookie('gaps-access-token', token, cookieOptions);
  return token;
};

const User = model<IUser>('user', userSchema);

export default User;
