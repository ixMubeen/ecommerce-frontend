import React from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-gray-200 dark:border-gray-700 animate-slide-in">
      {/* Image */}
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">₹{item.price}</p>

        {/* Quantity */}
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            −
          </button>
          <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Price & Remove */}
      <div className="text-right space-y-3">
        <div className="text-lg font-bold text-gray-900 dark:text-white">
          ₹{(item.price * item.quantity).toLocaleString()}
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;