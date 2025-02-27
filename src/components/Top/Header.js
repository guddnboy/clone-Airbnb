import React from 'react';
import ChooseTypeButton from './ChooseTypeButton';
import MyPageButton from './MyPageButton';
import InputButton from './InputButton';

function Header() {
  return (
    <div className='flex flex-col w-full h-48 border-b'>
      <div className='flex items-center justify-between py-4 px-12'>
        <div className='flex w-32 h-16 items-center'>
          <img
            src='/img/logo.png'
            alt='로고 이미지'
            className='w-fit h-fit hover:cursor-pointer'
          ></img>
        </div>
        <div className='flex justify-center items-center'>
          <ChooseTypeButton />
        </div>
        <MyPageButton />
      </div>
      <InputButton />
    </div>
  );
}

export default Header;
