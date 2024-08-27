import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Simple Card components (unchanged)
const Card = ({ children, className, ...props }) => (
  <div className={`bg-white rounded-lg overflow-hidden shadow-lg ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`${className}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`p-4 ${className}`} {...props}>{children}</div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 className={`text-xl font-semibold ${className}`} {...props}>{children}</h3>
);

const BlogDashboard = () => {
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

  return (
    <div className="p-6 bg-gradient-to-br from-purple-100 to-indigo-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Latest Blog Posts</h2>
      {posts.length === 0 && <p className="text-center text-gray-600">No posts found.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="p-0">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2 text-purple-700">{post.title}</CardTitle>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-600">{post.date}</span>
                <Link 
                  to={`/post/${post.id}`}
                  className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogDashboard;