import React from 'react';

function ChooseTypeButton() {
  return (
    <div className='flex items-center justify-center w-64'>
      <div className='flex w-14 h-10 justify-center'>
        <button className='w-full h-full hover:bg-gray-100 hover:rounded-2xl'>
          숙소
        </button>
      </div>
      <div className='flex w-14 h-10 justify-center'>
        <button className='w-full h-full hover:bg-gray-100 hover:rounded-2xl'>
          체험
        </button>
      </div>
    </div>
  );
}

export default ChooseTypeButton;
