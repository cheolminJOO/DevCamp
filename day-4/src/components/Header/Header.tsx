import React from 'react';
import { ModeToggle } from '../darkMode';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <span>logo</span>
      <ModeToggle />
    </div>
  );
};

export default Header;
