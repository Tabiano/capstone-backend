import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connect from './config/connect';
import authRouter from './routes/authRouter';
import { errorHandler, notFound } from './middlewares/errorHandler';

dotenv.config();

const APP_ENV = process.env.APP_ENV;
const port = process.env.PORT || 4001;
const app = express();

app.use(morgan(APP_ENV === 'PROD' ? 'tiny' : 'dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT as string],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })
);

app.use('/api/auth', authRouter);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  connect();
  console.log(`server is running on port: ${port}`);
});
