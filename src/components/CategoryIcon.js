import React from 'react';

const CategoryIcon = ({ img, name }) => {
  return (
    <div className='size-14 flex flex-col items-center justify-center'>
      <img src={img} alt={name} className='size-6' />
      <div className='text-xs'>{name}</div>
    </div>
  );
};

export default CategoryIcon;
