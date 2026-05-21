import React,{ useEffect, useState } from 'react';
import { getCategories } from '../api/productApi';


interface Props {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}

const FilterSidebar: React.FC <Props> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categories, setCategories] = useState<any[]>([]);


  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  
  
  useEffect(() => {
    fetchCategories();
  }, []);

  

  return (
    <aside className='filter-sidebar'>
      <h2>Categories</h2>

      <button
        className={!selectedCategory ? 'active' : ''}
        onClick={() => setSelectedCategory('')}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          className={
            selectedCategory === category.slug ? 'active' : ''
          }
          onClick={() => setSelectedCategory(category.slug)}
        >
          {category.name}
        </button>
      ))}
    </aside>
  );
};

export default FilterSidebar;