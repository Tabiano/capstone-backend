import { Types, Schema, InferSchemaType, model } from 'mongoose';

const courseSchema = new Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    subjects: {
      type: [Types.ObjectId],
      ref: 'subject',
      required: false,
      default: [],
    },
    isDeleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  { timestamps: true }
);

interface ICourse extends InferSchemaType<typeof courseSchema> {}

const Course = model<ICourse>('course', courseSchema);

export default Course;
