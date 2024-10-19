import expressAsyncHandler from 'express-async-handler';
import { Request, Response } from 'express';
import { userRegisterSchema } from '../utils/lib/zod-validations';
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from '../utils/helpers/generateTokenAndSetCookie';

// user
export const userRegister = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, firstName, middleName, lastName, suffix, password } =
    userRegisterSchema.parse(req.body);

  const hashedPassword = await bcrypt.hash(password, 10);
});

// admin
