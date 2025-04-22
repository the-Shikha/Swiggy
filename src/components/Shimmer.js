import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 max-w-7xl mx-auto">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-2xl shadow-md border border-orange-100 animate-pulse"
        >
          <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;

