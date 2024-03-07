import React from 'react';
import { Button } from '@/components/ui/button';
import { PWInputWithLabel } from '../Input/passwordInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../Validator/Validation';
import { Nickname } from '../Input/nameInput';
import { NicknameCheck } from '../Input/nameCheckInput';
import { EmailInputWithLabel } from '../Input/emailInput';

interface IProps {
  email: string;
  password: string;
  name: string;
  nameCheck: string;
}


const Body = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProps>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit((e) => console.log(e))}>
      <div className='flex justify-center items-center h-[800px]'>
        <div className='border w-[500px] h-[600px] p-10'>
          <div>
            <h1 className='text-2xl font-bold text-center'>로그인</h1>
          </div>

          <div className='flex justify-center items-center flex-col'>
            <EmailInputWithLabel register={register} errors={errors} />
            <PWInputWithLabel register={register} errors={errors} />
            <Nickname register={register} errors={errors}/>
            <NicknameCheck register={register} errors={errors}/>
          </div>
          <div className='flex justify-center items-center'>
            <Button type='button' className='mr-2'>
              회원가입
            </Button>
            <Button type='submit'>로그인</Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Body;
