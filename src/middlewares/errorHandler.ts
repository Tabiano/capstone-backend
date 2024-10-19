import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found.',
    statusCode: 404,
  });
};

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode =
    res.statusCode === 200 ? 500 : req instanceof ZodError ? 400 : res.statusCode;

  let errorMessage: string;

  if (err instanceof ZodError) {
    errorMessage = fromZodError(err).toString();
  } else {
    errorMessage = (err as Error).message;
  }

  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    statusCode,
  });
};
