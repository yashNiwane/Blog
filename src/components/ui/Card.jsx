import React from 'react';

const Card = ({ children, image, title, excerpt, date }) => {
  return (
    <div className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover" />}
      </CardHeader>
      <CardContent className="p-4">
        {title && <CardTitle className="text-xl font-semibold mb-2 text-purple-700">{title}</CardTitle>}
        {excerpt && <p className="text-gray-600 mb-4">{excerpt}</p>}
        <div className="flex justify-between items-center">
          {date && <span className="text-sm text-indigo-600">{date}</span>}
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300">
            Read More
          </button>
        </div>
      </CardContent>
    </div>
  );
};

export default Card;