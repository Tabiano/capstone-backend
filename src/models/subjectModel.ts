import { Types, Schema, InferSchemaType, model } from 'mongoose';

const subjectSchema = new Schema({
  course: {
    type: Types.ObjectId,
    ref: 'course',
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
});

interface ISubject extends InferSchemaType<typeof subjectSchema> {}

const Subject = model<ISubject>('subject', subjectSchema);

export default Subject;
