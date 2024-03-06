import { z } from 'zod';

const phoneRegex = /^010\d{8}$/;

const roleValidator = (val: string) => {
  if (val === '') {
    return console.log('역할을 선택해야 합니다');
  }
  return true;
};

export const SignUpSchema = z.object({
  name: z.string().min(2, { message: '최소 두 글자 이상 입력하세요' }),
  email: z
    .string()
    .min(1, { message: 'this filed has to be filled' })
    .email({ message: 'invalid email address' }),
  phone: z.string().regex(phoneRegex, 'invalid PhoneNumber'),
  role: z.string().refine(roleValidator),
});
