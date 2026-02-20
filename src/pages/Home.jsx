import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/layout/Hero';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/common/Button';
import productsData from '../data/products.json';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    // Show only 8 featured products
    setFeaturedProducts(productsData.slice(0, 8));
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Hero />

      {/* Features Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-600 dark:text-gray-400">Quick and reliable shipping to your doorstep</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.242 2.586a.75.75 0 00-.504 1.06l1.677 2.914A6.75 6.75 0 1010 15.75a1.75 1.75 0 001.75-1.75v-.5a.75.75 0 00-.75-.75h-2a.75.75 0 00-.75.75v.5a3.75 3.75 0 10-5.379-3.404l2.914 1.677a.75.75 0 11-.694 1.347L.92 9.652a.75.75 0 01.222-1.382l3.693-.674a.75.75 0 01.562 1.398L2.673 10.32a5.25 5.25 0 106.652-2.557l-1.677 2.914a.75.75 0 01-1.06-.504z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy Returns</h3>
              <p className="text-gray-600 dark:text-gray-400">Hassle-free returns within 30 days</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155.03.31.06.463.092a.5.5 0 01.464.925c-.152.03-.307.06-.463.091a.5.5 0 01-.464-.925zm0 3c.155.03.31.06.463.092a.5.5 0 01.464.925c-.152.03-.307.06-.463.091a.5.5 0 01-.464-.925zm0 3a.5.5 0 01.463.092.5.5 0 01-.464.925c-.156-.031-.308-.061-.463-.091a.5.5 0 01.464-.925z" />
                  <path d="M10.5 2H4a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V3.5A1.5 1.5 0 0016.5 2zM12 15H8v-4h4v4zM8 9H4V5h4v4zm8 0h-4V5h4v4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Payment</h3>
              <p className="text-gray-600 dark:text-gray-400">100% secure and encrypted transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Featured Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Check out our best-selling items
              </p>
            </div>
            <Link to="/products">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get the latest updates on new products and upcoming sales
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;