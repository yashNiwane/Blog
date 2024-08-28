import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({ children, className, ...props }) => (
  <motion.div
    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    className={`bg-white rounded-lg overflow-hidden shadow-lg ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 flex flex-col h-full ${className}`} {...props}>{children}</div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`font-semibold mb-2 ${className}`} {...props}>{children}</h3>
);

const BlogDashboard = ({ selectedCategory, searchTerm }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const importPosts = async () => {
      try {
        const postModules = import.meta.glob('/src/components/posts/*.jsx');
        const loadedPosts = await Promise.all(
          Object.entries(postModules).map(async ([path, loader]) => {
            const module = await loader();
            return module.default;
          })
        );
        setPosts(loadedPosts);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      }
    };

    importPosts();
  }, []);

  // Sort posts by date in descending order
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const filteredPosts = sortedPosts
    .filter(post => selectedCategory === "All" || post.category === selectedCategory)
    .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-6 bg-gradient-to-br from-purple-100 to-indigo-100 min-h-screen">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center text-purple-800"
      >
        Latest Posts
      </motion.h1>
      {filteredPosts.length === 0 && (
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-xl text-gray-600 my-12"
        >
          No posts found.
        </motion.p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <Card key={post.id} className={index === 0 ? 'md:col-span-2 lg:col-span-3' : ''}>
            <div className={`flex flex-col ${index === 0 ? 'md:flex-row' : ''}`}>
              <div className={`${index === 0 ? 'md:w-2/3' : 'w-full'}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 md:h-64 object-cover"
                />
              </div>
              <CardContent className={`${index === 0 ? 'md:w-1/3' : 'w-full'}`}>
                <CardTitle className={`${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'} text-purple-700`}>
                  {post.title}
                </CardTitle>
                <p className={`text-gray-600 mb-4 flex-grow ${index === 0 ? 'text-base md:text-lg' : 'text-sm'}`}>
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-sm font-medium text-indigo-600">{post.date}</span>
                  <Link 
                    to={`/post/${post.id}`}
                    className="px-4 py-2 bg-purple-600 text-white text-sm rounded-full hover:bg-purple-700 transition-colors duration-300"
                  >
                    Read More
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;
