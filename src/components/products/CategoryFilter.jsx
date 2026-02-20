import React from 'react';

const CategoryFilter = ({ categories = [], selected = '', onChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
      <div className="space-y-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="category"
            value=""
            checked={selected === ''}
            onChange={() => onChange('')}
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-gray-700 dark:text-gray-300">All Categories</span>
        </label>

        {categories.map((category) => (
          <label key={category} className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              checked={selected === category}
              onChange={() => onChange(category)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-gray-700 dark:text-gray-300">{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;