import React from 'react';
import { Button } from '@/components/ui/button';
import { EmailInputWithLabel } from '../emailInput';
import { PWInputWithLabel } from '../passwordInput';

const Body = () => {
  return (
    <div className='flex justify-center items-center h-[800px]'>
      <div className='border w-[500px] h-[600px] p-10'>
        <div>
          <h1 className='text-2xl font-bold text-center'>로그인</h1>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='my-5'>
            <EmailInputWithLabel />
          </div>
          <div className='my-5'>
            <PWInputWithLabel />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Button className='mr-2'>회원가입</Button>
          <Button>로그인</Button>
        </div>
      </div>
    </div>
  );
};

export default Body;
