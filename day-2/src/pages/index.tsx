import { AlertDemo } from '@/components/Alert';
import Header from '@/components/Header/Header';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState({});
  const [isClicked, setIsClicked] = useState(false);

  const testObject = { name: '', age: '' };

  const onClickSubmit = (data: any) => {
    setName(data);
  };

  const onClickBtn = () => {
    setIsClicked((prev) => !prev);
  };

  console.log(name);
  return (
    <main>
      <Header />
      <div className=''>
        <h2 className='text-center mt-[40px] font-bold text-[50px]'>
          Hello world !
        </h2>
        <p className='max-w-[600px] m-auto text-center'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <Button
          className='m-auto text-center flex justify-center mt-[20px]'
          variant='outline'
        >
          Button
        </Button>
        <form onSubmit={handleSubmit(onClickSubmit)}>
          <input
            type='text'
            placeholder='이름을 입력하세요'
            {...register('name')}
          />
          <input
            type='text'
            placeholder='나이를 입력하세요'
            {...register('age')}
          />
          <button onClick={onClickBtn}>등록하기</button>
          {isClicked && AlertDemo()}
          {name !== undefined && (
            <>
              <div>{name.name}</div>
              <div>{name.age}</div>
            </>
          )}
        </form>
      </div>
    </main>
  );
}
