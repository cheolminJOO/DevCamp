import React from 'react';
import { ModeToggle } from '../DarkMode';

const Header = () => {
  return (
    <div>
      <div className='w-[80&] m-auto flex justify-between items-center py-[10px]'>
        <div className='left'>
          <h2>Logo</h2>
        </div>
        <div className='right'>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
