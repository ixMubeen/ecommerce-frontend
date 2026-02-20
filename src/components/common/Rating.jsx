import React from 'react';

const Rating = ({ rating = 0, count = 0, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  return (
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        {stars.map((isFilled, i) => (
          <svg
            key={i}
            className={`${sizeClasses[size]} ${isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600 fill-current'}`}
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {rating} {count > 0 && `(${count})`}
      </span>
    </div>
  );
};

export default Rating;