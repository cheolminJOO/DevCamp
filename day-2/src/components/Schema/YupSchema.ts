import * as yup from 'yup';

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/);

export const schema = yup.object({
  writer: yup.string().required('이름을 입력하세요'),
  email: yup.string().email().required('입력하세요'),
  phone: yup.string().required('번호 입력하세요'),
  role: yup.string().required('역할 정하세요'),
});
