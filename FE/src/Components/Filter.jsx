import React, { useRef } from 'react';
import 'tailwindcss/tailwind.css';
import './Horro.css';

const HorrorStories = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    console.log("cc")
    carouselRef.current.scrollBy({ left: -500, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="container max-w-8xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">Horror Stories</h1>
        <h2 className="text-2xl font-semibold mb-2 text-center">Hottest Wattpad Originals</h2>
        <p className="mb-6 text-gray-600 text-center">Read the stories we love</p>
        
        <div className="relative"  >
          <button
           onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          >
            &lt;
          </button>
          <div ref={carouselRef} className="flex justify-center space-x-4 mb-6 pb-2 carousel overflow-x-auto">
            {['High Strangeness', 'Swallow', 'Red Zoned', 'Finding Humanity', 'Apartment 239', 'Serial', 'Hollow'].map((title, index) => (
              <div key={index} className="flex-shrink-0 w-40 mb-4 sm:w-48 md:w-56">
                <div className="relative">
                  <img src={`/path/to/cover-${index}.jpg`} alt={title} className="w-full h-60 object-cover rounded-lg shadow-md" />
                  <span className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">{title.toLowerCase()}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          >
            &gt;
          </button>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-center">Refine by tag:</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {['horror', 'thriller', 'murder', 'mystery', 'scary', 'death', 'paranormal', 'creepy', 'texttospeech', 'ghost', 'gore', 'killer', 'dark', 'blood', 'suspense', 'zombies', 'kidnapped', 'crime'].map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full flex items-center">
              {tag}
              <button className="ml-2 text-gray-500 hover:text-gray-700">+</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorrorStories;


