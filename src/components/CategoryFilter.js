import { React, useEffect, useState } from 'react';
import CategoryIcon from './CategoryIcon';

function CategoryFilter() {
  const [categories, setCategories] = useState([]);

  function getCategoryData() {
    try {
      fetch('/data/categoryData.json')
        .then((response) => response.json())
        .then((data) => {
          setCategories(data.categories);
        });
    } catch (error) {
      console.error('데이터 로딩 실패', error);
    }
  }
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className='flex items-center overflow-y-hidden h-16 px-12 gap-4'>
      {categories.map((category, idx) => (
        <CategoryIcon key={idx} img={category.img} name={category.name} />
      ))}
    </div>
  );
}
export default CategoryFilter;
