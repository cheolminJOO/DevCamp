import { z } from 'zod';

const emailRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

export const loginSchema = z.object({
  email: z.string().regex(emailRegex, { message: '이메일 형식이 아닙니다.' }),
});
