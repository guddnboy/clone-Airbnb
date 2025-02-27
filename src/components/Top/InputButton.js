import React from 'react';

function InputButton() {
  return (
    <div className='flex justify-center w-full h-16'>
      <div className='flex w-[55rem] items-center border rounded-full border-gray-300 bg-white shadow-lg'>
        <div className='flex flex-col w-64 h-full pl-4 justify-center rounded-full border border-transparent hover:border hover:bg-gray-100'>
          <button className='w-14 flex flex-col text-xs pr-4'>할 일</button>
          <input
            type='text'
            placeholder='할 일을 입력하세요.'
            className='w-fit border-none text-sm outline-none pl-2 bg-inherit '
          />
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex flex-col w-36 h-full pl-4 justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer'>
          <button className='w-18 flex flex-col text-xs pl-1 items-start'>
            카테고리
          </button>
          <div className='text-sm pl-1 text-gray-400'>카테고리 추가</div>
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex flex-col w-36 h-full pl-4 justify-center rounded-full hover:bg-gray-100 hover:cursor-pointer'>
          <button className='w-16 flex flex-col text-xs items-start pl-1'>
            마감일
          </button>
          <div className='text-sm pl-1 text-gray-400'>날짜 추가</div>
        </div>

        <div className='border-r-[1px] border-gray-300 h-10' />

        <div className='flex w-80 h-full'>
          <div className='flex flex-row items-center justify-center rounded-full border border-transparent hover:bg-gray-100 hover:cursor-pointer'>
            <div className='flex flex-col w-[17rem] h-full pl-4 justify-center'>
              <button className='w-16 flex text-xs'>상세 내용</button>
              <div className='text-sm text-gray-400'>상세 내용 입력</div>
            </div>
            <div className='flex items-center size-12 rounded-full bg-airbnb-secondary text-white justify-center transition hover:brightness-90'>
              <img
                src='/img/add.png'
                className='size-7 invert opacity-75'
                alt='추가'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputButton;
