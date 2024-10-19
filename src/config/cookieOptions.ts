import { CookieOptions } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const APP_ENV = process.env.APP_ENV;

const cookieOptions: CookieOptions = {
  path: '/',
  httpOnly: true,
  maxAge: 60_000 * 60 * 24 * 60,
  secure: APP_ENV === 'PROD',
  sameSite: APP_ENV === 'PROD' ? 'none' : 'lax',
};

export default cookieOptions;
