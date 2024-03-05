import React, { useState } from 'react';
import { SelectDemo } from '../Select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { SignUpSchema } from '../Schema/SignUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface Person {
  name: string;
  email: string;
  phone: number;
  role: string;
}

const SettingInfo = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
    defaultValues: {},
  });

  const [roleError, setRoleError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
  });

  const onChangeSubmit = (data: z.infer<typeof SignUpSchema>) => {
    if (!data.role) {
      setRoleError('ㅇㅇㅇ');
    }

    console.log(data);
  };

  return (
    <div className=' flex justify-center items-center w-full h-full'>
      <div className=' p-5 rounded-2xl w-96 h-[600px] border '>
        <div className='mb-5'>
          <h1 className='font-bold text-2xl'>계정을 생성합니다</h1>
          <p className='text-gray-500 text-1xl'>필수 정보를 입력해볼게요.</p>
        </div>
        <form onSubmit={form.handleSubmit(onChangeSubmit)}>
          <p className='mb-3 mt-3'>이름</p>
          <input
            className='border w-full h-10 rounded-md ml-2'
            placeholder='que'
            {...register('name')}
          />
          {errors.name?.message && (
            <span className='text-red-500'>{errors.name?.message}</span>
          )}
          <p className='mb-3 mt-3'>이메일</p>
          <input
            className='border w-full h-10 rounded-md ml-2'
            placeholder='que'
            {...register('email')}
          />
          {errors.email?.message && (
            <span className='text-red-500'>{errors.email?.message}</span>
          )}
          <p className='mb-3 mt-3'>연락처</p>
          <input
            className='border w-full h-10 rounded-md ml-2 '
            placeholder='홍길동'
            {...register('phone')}
          />
          {errors.phone?.message && (
            <span className='text-red-500'>{errors.phone?.message}</span>
          )}
          <p className='mb-3 mt-3'>역할</p>
          <SelectDemo register={register} />
          {errors.role && (
            <span className='text-red-500'>{errors.role?.message}</span>
          )}
          <Button
            className='bg-primary text-primary-foreground mt-4'
            variant='outline'
            type='submit'
          >
            Button
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SettingInfo;
