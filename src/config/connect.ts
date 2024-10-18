import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING as string);
    console.log('connected to db!');
  } catch (error) {
    console.error(error);
  }
};

export default connect;
