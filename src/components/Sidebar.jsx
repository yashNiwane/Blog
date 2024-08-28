import React, { useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar, selectedCategory, setSelectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ["All", "Health", "Technology", "How to", "Business"];

  const handleSearch = () => {
    if (searchQuery) {
      // Implement Google Custom Search Engine (CSE) or a search redirection here
      // For demonstration purposes, we're just showing an alert
      window.open(`https://www.google.com/search?q=${searchQuery} + site:creoxy.com`, '_blank');
    }
  };

  return (
    <div className={`bg-white w-64 shadow-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 w-full rounded"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white p-2 mt-2 w-full rounded"
          >
            Search
          </button>
        </div>
        
        <ul className="mb-4">
          {categories.map((category) => (
            <li key={category} className="mb-2">
              <button
                onClick={() => setSelectedCategory(category)}
                className={`text-lg ${selectedCategory === category ? 'text-purple-700 font-semibold' : 'text-gray-700'}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
