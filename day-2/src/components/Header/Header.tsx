import React from 'react';
import { ModeToggle } from '../DarkMode';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
      <div className=' fixed w-full m-auto flex justify-between items-center py-[10px]'>
        <div className='left'>
          <img className='w-32 h-32 ' src='/sun.png' alt='로고' />
        </div>
        <div className='right mb-20'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
