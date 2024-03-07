import React from 'react';
import { Button } from '@/components/ui/button';
import { EmailInputWithLabel } from '../emailInput';
import { PWInputWithLabel } from '../passwordInput';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../Validator/Validation';

interface IProps {
  email: string;
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
            <div className='my-5'>
              <input {...register('email')} />
              {errors.email?.message && (
                <span className='text-red-500'>{errors.email?.message}</span>
              )}
            </div>
            <div className='my-5'>
              <PWInputWithLabel />
            </div>
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
