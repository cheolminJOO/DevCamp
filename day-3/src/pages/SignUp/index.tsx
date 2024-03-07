import React, { useState } from 'react';
import { SelectDemo } from '../../components/Select';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { SignUpSchema } from '../../components/Schema/SignUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import DaumPostcode from 'react-daum-postcode';
import { Modal } from 'antd';
import { twMerge } from 'tailwind-merge';
import SettingPW from '../Password';
import { useRouter } from 'next/router';

interface Person {
  name: string;
  email: string;
  phone: number;
}

const SettingInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState('');
  const [zipcode, setZipcod] = useState('');
  const [next, setNext] = useState(false);
  const [data, setData] = useState({});

  const router = useRouter();

  const onChangeAddress = (data) => {
    console.log(data);
    setAddress(data.address);
    setZipcod(data.zonecode);
    setIsOpen(false);
  };

  const handleOnOff = () => {
    setIsOpen((prev) => !prev);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Person>({
    resolver: zodResolver(SignUpSchema),
    mode: 'onChange',
  });

  const onChangeData = (data) => {
    setNext((prev) => !prev);
    setData({ ...data });
  };

  const className = 'mb-3 mt-3';

  return (
    <div className=' flex justify-center items-center w-full h-full'>
      <div className=' p-5 rounded-2xl w-96 h-[600px] border '>
        {!next && (
          <form onSubmit={handleSubmit(onChangeData)}>
            <div>
              <p className={className}>이름</p>
              <input
                className='border w-full h-10 rounded-md ml-2'
                placeholder='que'
                {...register('name')}
              />
              {!errors.name?.message && <div className='mt-[36px]'></div>}
              {errors.name?.message && (
                <span className='text-red-500'>{errors.name?.message}</span>
              )}
              <p className='mb-3 mt-3'>이메일</p>
              <input
                className='border w-full h-10 rounded-md ml-2'
                placeholder='que'
                {...register('email')}
              />
              {!errors.email?.message && <div className='mt-[36px]'></div>}
              {errors.email?.message && (
                <span className='text-red-500'>{errors.email?.message}</span>
              )}
              <p className='mb-3 mt-3'>연락처</p>
              <input
                className={twMerge('border w-full', ' h-10 rounded-md ml-2 ')}
                placeholder='홍길동'
                {...register('phone')}
              />
              {!errors.phone?.message && <div className='mt-[36px]'></div>}
              {errors.phone?.message && (
                <span className='text-red-500'>{errors.phone?.message}</span>
              )}
              <p className='mb-3 mt-3'>주소</p>
              <Button variant='outline' type='button' onClick={handleOnOff}>
                주소 검색
              </Button>
              <input
                value={zipcode}
                className='border w-[60px] h-10 rounded-md m1-2 text-center'
                readOnly
              />
              {isOpen && (
                <Modal
                  okText='확인'
                  cancelText ='취소'
                  open={true}
                  onOk={handleOnOff}
                  onCancel={handleOnOff}
                  okButtonProps={{ className: 'custom-ok-button-class' }}
                >
                  <DaumPostcode onComplete={onChangeAddress}></DaumPostcode>
                </Modal>
              )}
              <input
                value={address}
                className='border w-full h-10 rounded-md ml-2'
                readOnly
              />
            </div>
            <div className='flex justify-center items-center'>
              <Button
                className='bg-primary text-primary-foreground'
                variant='outline'
                type='submit'
              >
                다음 단계
              </Button>
            </div>
          </form>
        )}
        {next && <SettingPW setNext={setNext} data={data} />}
      </div>
    </div>
  );
};

export default SettingInfo;
