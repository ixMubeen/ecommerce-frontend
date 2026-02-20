import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';
import Rating from '../common/Rating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700 h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
            -{discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <Link
          to={`/product/${product.id}`}
          className="text-gray-500 dark:text-gray-400 text-xs font-semibold hover:text-blue-600 dark:hover:text-blue-400"
        >
          {product.category}
        </Link>

        <Link
          to={`/product/${product.id}`}
          className="block font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors line-clamp-2"
        >
          {product.name}
        </Link>

        <div className="flex items-center justify-between">
          <Rating rating={product.rating} />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            ({Math.floor(Math.random() * 200) + 10} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            ₹{product.price}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
        </div>

        {/* Stock */}
        <div className="text-xs font-semibold">
          {product.stock > 5 ? (
            <span className="text-green-600 dark:text-green-400">In Stock</span>
          ) : (
            <span className="text-red-600 dark:text-red-400">Only {product.stock} left</span>
          )}
        </div>

        {/* Button */}
        <Button
          onClick={handleAddToCart}
          variant={product.stock === 0 ? 'secondary' : 'primary'}
          className="w-full"
          disabled={product.stock === 0}
        >
          {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;