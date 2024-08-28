import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="p-8 bg-gradient-to-br from-indigo-100 to-purple-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-4xl font-bold text-center text-indigo-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Creoxy, where creativity meets oxygen. We are dedicated to providing high-quality articles and insights on a wide range of topics, from technology and design to art and culture. Our mission is to inspire, educate, and empower our readers with content that is both informative and engaging.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          At Creoxy, we believe that knowledge is the key to unlocking potential. We strive to create a platform where readers can explore new ideas, discover emerging trends, and gain valuable insights that help them stay ahead in an ever-changing world.
        </p>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>In-depth articles and tutorials on the latest in technology and design.</li>
          <li>Curated content that explores the intersection of art, culture, and innovation.</li>
          <li>Expert opinions and interviews with industry leaders.</li>
          <li>Resources and guides to help you grow both personally and professionally.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
          Join Our Community
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We are more than just a content platform—we are a community of curious minds and passionate creators. Whether you’re here to learn, share, or simply be inspired, we invite you to join us on this journey of discovery. Follow us on social media, subscribe to our newsletter, and be a part of the conversation.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 text-center"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
