import React from 'react';
import { useState } from 'react';

function ChooseTypeButton() {
  const [isTodo, setisTodo] = useState(true);
  const [isTobuy, setisTobuy] = useState(false);

  const selectStay = () => {
    if (!isTodo) {
      setisTodo(true);
      setisTobuy(false);
    }
  };

  const selectTry = () => {
    if (!isTobuy) {
      setisTobuy(true);
      setisTodo(false);
    }
  };

  return (
    <div className='flex items-center justify-center w-64 pl-40'>
      <div className='flex w-24 h-10 justify-center'>
        <button
          className={`w-20 h-full hover:bg-gray-100 hover:rounded-2xl ${isTobuy ? 'text-gray-500' : 'text-black'}`}
          onClick={() => {
            selectStay();
          }}
        >
          TODO
        </button>
      </div>
      <div className='flex w-24 h-10 justify-center'>
        <button
          className={`w-20 h-full hover:bg-gray-100 hover:rounded-2xl ${isTobuy ? 'text-black' : 'text-gray-500'}`}
          onClick={() => {
            selectTry();
          }}
        >
          TOBUY
        </button>
      </div>
    </div>
  );
}

export default ChooseTypeButton;
