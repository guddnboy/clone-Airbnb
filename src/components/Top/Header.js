import React from 'react';
import CategoryFilter from '../CategoryFilter';
import ChooseTypeButton from './ChooseTypeButton';

function Header() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-around'>
        <div className='w-32 h-16'>
          <img
            src='/img/logo.png'
            alt='로고 이미지'
            className='w-fit h-fit'
          ></img>
        </div>
        <ChooseTypeButton />
        <div>마이페이지</div>
      </div>
      <CategoryFilter />
    </div>
  );
}

export default Header;
