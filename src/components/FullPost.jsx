import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FullPost = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      try {
        const module = await import(`/src/components/posts/${id}.jsx`);
        setPost(module.default);
      } catch (error) {
        console.error("Error loading post:", error);
        setPost(null);
      }
    };

    loadPost();
  }, [id]);

  const renderContentBlock = (block) => {
    switch (block.type) {
      case 'paragraph':
        return <p className="mb-4 text-gray-700">{block.text}</p>;
      case 'image':
        return <img src={block.src} alt={block.alt} className="w-full h-64 object-cover rounded-lg mb-6" />;
      case 'heading':
        return React.createElement(`h${block.level}`, { className: 'text-2xl font-bold text-purple-800 mb-4' }, block.text);
      case 'subheading':
        return <h3 className="text-xl font-semibold text-purple-600 mb-3">{block.text}</h3>;
      case 'link':
        return <a href={block.href} className="text-indigo-600 hover:underline">{block.text}</a>;
      default:
        return null;
    }
  };

  if (!post) {
    return (
      <div className="text-center text-gray-600">
        <p>Post not found or still loading...</p>
        <Link 
          to="/"
          className="inline-block mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
        >
          Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">{post.title}</h1>
      <p className="text-sm text-indigo-600 mb-4">{post.date}</p>
      {post.content.map((block, index) => (
        <div key={index}>
          {renderContentBlock(block)}
        </div>
      ))}
      <Link 
        to="/"
        className="inline-block mt-6 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300"
      >
        Back to Posts
      </Link>
    </div>
  );
};

export default FullPost;
