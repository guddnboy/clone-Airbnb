import React from 'react';

function MyPageButton() {
  return (
    <div className='flex items-center'>
      <div className='w-80 h-10 flex items-center'>
        <button className='w-64 h-full hover:bg-gray-100 hover:rounded-3xl text-sm'>
          당신의 공간을 에어비앤비하세요
        </button>
        <div className='w-12 h-full flex items-center justify-center hover:bg-gray-100 hover:rounded-3xl hover:cursor-pointer'>
          <img src='/img/language.png' alt='언어' className='size-4' />
        </div>
      </div>
      <div className='flex items-center justify-center w-24 h-12 transition hover:shadow-lg rounded-3xl gap-4 border-gray-300 border'>
        <div>
          <img
            src='/img/menu.png'
            alt='메뉴'
            className='size-4 hover:cursor-pointer'
          />
        </div>
        <img
          src='/img/profile.png'
          alt='프로필'
          className='size-8 hover:cursor-pointer'
        ></img>
      </div>
    </div>
  );
}

export default MyPageButton;
