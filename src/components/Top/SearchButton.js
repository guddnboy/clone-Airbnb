import React from 'react';

function SearchButton() {
  return (
    <div className='flex justify-center w-full h-16'>
      <div className='flex w-[50rem] items-center border rounded-full border-gray-300 bg-white shadow-lg'>
        <div className='flex flex-col w-[15rem] h-full pl-4 justify-center rounded-full border border-transparent hover:border hover:bg-gray-100'>
          <button className='w-14 flex flex-col text-xs pr-4'>여행지</button>
          <input
            type='text'
            placeholder='여행지 검색'
            className='w-fit border-none text-sm outline-none pl-1 bg-inherit '
          />
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex flex-col w-[8rem] h-full pl-4 justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer'>
          <button className='w-14 flex flex-col text-xs pr-4'>체크인</button>
          <div className='text-sm pl-1 text-gray-400'>날짜 추가</div>
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex flex-col w-[8rem] h-full pl-4 justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer'>
          <button className='w-16 flex flex-col text-xs pr-4'>체크아웃</button>
          <div className='text-sm pl-1 text-gray-400'>날짜 추가</div>
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex w-80 h-full'>
          <div className='flex flex-row items-center justify-center rounded-full border border-transparent hover:bg-gray-100 hover:cursor-pointer'>
            <div className='flex flex-col w-64 h-full pl-4 justify-center'>
              <button className='w-16 flex text-xs'>여행자</button>
              <div className='text-sm text-gray-400'>게스트 추가</div>
            </div>
            <div className='flex items-center size-12 rounded-full bg-airbnb-secondary text-white justify-center transition hover:brightness-90'>
              <img src='/img/search.png' className='size-4' alt='검색' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchButton;
