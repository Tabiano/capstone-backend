import z from 'zod';

export const userRegisterSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be atleast 8 characters' }),
  firstName: z.string().min(1, { message: 'This field is required' }),
  middleName: z.string().min(1, { message: 'This field is required' }),
  lastName: z.string().min(1, { message: 'This field is required' }),
  suffix: z.string().optional(),
});
