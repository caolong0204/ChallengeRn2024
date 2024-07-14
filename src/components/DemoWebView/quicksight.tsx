import React from 'react';

const phones = [
  {
    name: 'iPhone 14 Pro',
    description:
      'The latest iPhone with advanced features and stunning design.',
    price: '$999',
  },
  {
    name: 'Samsung Galaxy S22',
    description: 'Experience the next generation of Galaxy with the S22.',
    price: '$899',
  },
  {
    name: 'Google Pixel 7',
    description: 'The smartest and fastest Pixel yet.',
    price: '$799',
  },
];

const QuickSight = () => {
  return `
    <div class="product-ad-page bg-gray-100 p-6">
      <h1 class="text-3xl font-bold mb-6">Phone Advertisement</h1>
      <div class="product-list grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${phones.map((phone, index) => {
          return `<div
                    key={${index}}
                    class="product-item bg-white p-4 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold mb-2">${phone.name}</h2>
                    <p class="text-gray-700 mb-4">${phone.description}</p>
                    <div class="flex justify-between items-center">
                      <p class="product-price text-lg font-bold text-green-600">
                        ${phone.price}
                      </p>
                      <button class="buy-button bg-blue-500 text-white py-2 px-4 rounded">
                        Buy Now
                      </button>
                    </div>
                  </div>`;
        })}
      </div>
    </div>`;
};

export default QuickSight;
