import React, { useState, useMemo } from 'react';
import Breadcrumb from '../components/common/Breadcrumb';
import SearchBar from '../components/products/SearchBar';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductGrid from '../components/products/ProductGrid';
import Button from '../components/common/Button';
import productsData from '../data/products.json';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [...new Set(productsData.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = productsData;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Products' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Products
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Showing {filteredAndSortedProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Search</h3>
              <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />

            {/* Sort */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            {/* Reset Filters */}
            {(searchTerm || selectedCategory) && (
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                }}
              >
                Reset Filters
              </Button>
            )}
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid products={filteredAndSortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;