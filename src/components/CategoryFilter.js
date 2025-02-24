import React from 'react';

function CategoryFilter() {
  return (
    <div className='flex justify-center w-full h-16'>
      <div className='flex w-[45rem] border rounded-full border-gray-300 bg-gray-200'>
        <div className='flex flex-col w-[15rem] pl-4 justify-center rounded-full border bg-white shadow-lg'>
          <button className='w-14 flex flex-col text-xs pr-4'>여행지</button>
          <input
            type='text'
            placeholder='여행지 검색'
            className='w-fit border-none text-sm outline-none pl-1 bg-inherit'
          />
        </div>
      </div>
    </div>
  );
}
export default CategoryFilter;
