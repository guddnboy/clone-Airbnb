import React from 'react';
import { useState } from 'react';

function ChooseTypeButton() {
  const [isStay, setIsStay] = useState(true);
  const [isTry, setIsTry] = useState(false);

  const selectStay = () => {
    if (!isStay) {
      setIsStay(true);
      setIsTry(false);
    }
  };

  const selectTry = () => {
    if (!isTry) {
      setIsTry(true);
      setIsStay(false);
    }
  };

  return (
    <div className='flex items-center justify-center w-64 pl-40'>
      <div className='flex w-14 h-10 justify-center'>
        <button
          className={`w-full h-full hover:bg-gray-100 hover:rounded-2xl ${isTry ? 'text-gray-500' : 'text-black'}`}
          onClick={() => {
            selectStay();
          }}
        >
          숙소
        </button>
      </div>
      <div className='flex w-14 h-10 justify-center'>
        <button
          className={`w-full h-full hover:bg-gray-100 hover:rounded-2xl ${isTry ? 'text-black' : 'text-gray-500'}`}
          onClick={() => {
            selectTry();
          }}
        >
          체험
        </button>
      </div>
    </div>
  );
}

export default ChooseTypeButton;
