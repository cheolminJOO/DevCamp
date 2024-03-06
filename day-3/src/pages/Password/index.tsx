import { PasswordSchema, SignUpSchema } from '@/components/Schema/SignUpSchema';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import React, { ChangeEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IProps {
  setNext: React.Dispatch<React.SetStateAction<boolean>>;
  data: any;
}

interface IPassword {
  password: string;
  checkPassword: string;
}

const SettingPW: React.FC<IProps> = ({ setNext, data }) => {
  const [image, setImage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPassword>({
    resolver: zodResolver(PasswordSchema),
    mode: 'onChange',
  });

  const onClickBackBtn = () => {
    setNext((prev) => !prev);
  };

  const fileRef = useRef(null);

  const onClickImgChange = () => {
    if (fileRef.current) {
      fileRef.current?.click();
    }
  };

  const onChangeImg = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (event) => {
      if (typeof event.target?.result === 'string')
        setImage(event.target?.result);
    };
  };

  const onSubmitData = (password) => {
    console.log(data);
    alert(
      `이름 :${data.name},
    이메일 : ${data.email}
    핸드폰 번호 : ${data.phone}`
    );
  };

  return (
    <div className=' p-4 justify-between'>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className='h-[400px]'>
          <p className='mb-3 mt-3'>비밀번호</p>
          <input
            className='border w-full h-10 rounded-md ml-2'
            type='password'
            {...register('password')}
          />
          {errors.password?.message && (
            <span className='text-red-500'>{errors.password?.message}</span>
          )}
          <p className='mb-3 mt-3'>비밀번호 확인</p>
          <input
            className='border w-full h-10 rounded-md ml-2'
            type='password'
            {...register('checkPassword')}
          />
          {errors.checkPassword?.message && (
            <span className='text-red-500'>
              {errors.checkPassword?.message}
            </span>
          )}

          <p className='mb-3 mt-3'>프로필 이미지</p>
          <div className='flex justify-center items-center flex-col'>
            {image === '' && (
              <img
                className='w-[200px] h-[200px]'
                src='avatar.png'
                alt='기본 이미지'
              />
            )}
            {image !== '' && (
              <img className='w-[200px] h-[200px]' src={image} alt='이미지' />
            )}

            <button type='button' onClick={onClickImgChange}>
              이미지 변경
            </button>
            <input
              onChange={onChangeImg}
              type='file'
              ref={fileRef}
              className='hidden'
            />
          </div>
        </div>
        <div className=' h-[120px] flex justify-around items-end'>
          <button
            onClick={onClickBackBtn}
            className='border h-[40px] w-[80px] rounded-md text-[13px]'
          >
            이전으로
          </button>
          <Button type='submit' className='bg-primary text-primary-foreground'>
            등록하기
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettingPW;
