import React from 'react';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';

const CartSummary = () => {
  const { cart, getTotalPrice, clearCart } = useCart();
  const subtotal = getTotalPrice();
  const shipping = subtotal > 5000 ? 0 : 100;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>

      <div className="space-y-3 border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Subtotal ({cart.length} items)</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Shipping</span>
          <span className={shipping === 0 ? 'text-green-600 font-semibold' : ''}>
            {shipping === 0 ? 'FREE' : `₹${shipping}`}
          </span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300">
          <span>Tax (18%)</span>
          <span>₹{tax.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-4">
        <span>Total</span>
        <span>₹{total.toLocaleString()}</span>
      </div>

      <Button variant="primary" className="w-full" size="lg">
        Proceed to Checkout
      </Button>

      <button
        onClick={clearCart}
        className="w-full px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm"
      >
        Clear Cart
      </button>

      {subtotal > 0 && subtotal < 5000 && (
        <p className="text-sm text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
          🎁 Free shipping on orders over ₹5000. Add ₹{(5000 - subtotal).toLocaleString()} more to get free shipping!
        </p>
      )}
    </div>
  );
};

export default CartSummary;