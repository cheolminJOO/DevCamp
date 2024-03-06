import { z } from 'zod';

const phoneRegex = /^010\d{8}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

export const SignUpSchema = z.object({
  name: z.string().min(2, { message: '최소 두 글자 이상 입력하세요' }),
  email: z
    .string()
    .min(1, { message: 'this filed has to be filled' })
    .email({ message: 'invalid email address' }),
  phone: z.string().regex(phoneRegex, 'invalid PhoneNumber'),
});

export const PasswordSchema = z
  .object({
    password: z
      .string()
      .regex(
        passwordRegex,
        '비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다'
      ),
    checkPassword: z
      .string()
      .regex(
        passwordRegex,
        '비밀번호는 최소 8자에서 16자까지, 영문자, 숫자 및 특수 문자를 포함해야 합니다'
      ),
  })
  .superRefine(({ checkPassword, password }, ctx) => {
    if (checkPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'password not matched',
        path: ['checkPassword'],
      });
    }
  });
