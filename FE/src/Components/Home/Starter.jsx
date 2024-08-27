import React from 'react'

function Starter() {
    const images = [
        "/hero-stories/1.jpg",
        "/hero-stories/7.jpg",
        "/hero-stories/6.jpg", 
        "/hero-stories/5.jpg",
         "/hero-stories/3.jpg", 
         "/hero-stories/4.jpg",
         "/hero-stories/5.jpg",
         "/hero-stories/3.jpg", 
      
      
      ];
      
    return (
        <div className="flex flex-col items-center p-8 border-b-2 border-b-blue-300 mb-10">
          <div className="flex w-full mb-8">
            <div className="lg:w-1/2 p-4 ">
              <h1 className="text-5xl font-bold mb-4">
                Find Timeless <span className="text-red-500">Stories</span> That Transport and Inspire
              </h1>
              <p className="text-lg mb-4">
                A dynamic community platform where creators can craft and share their stories, express their emotions, and connect with a supportive audience.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                Get Started on Your Story Quest
              </button>
              <div className="mt-4">
                <span className="text-yellow-500">★★★★★</span>
                <p className="text-sm mt-2">
                  Already <span className="font-bold">1 Million+</span> #storytellers are sharing their stories.
                </p>
              </div>
            </div>
            <div className="w-1/2 hidden lg:grid grid-cols-4 gap-1 relative p:7 ">
              {images.map((src, index) => (
                <div
                  key={index}
                  className=" transform transition-transform duration-300 hover:scale-110 relative group image-container"
                  style={{ top: `${index % 2 === 0 ? "10px" : "-30px"}` }}
                >
                  <img
                    src={src}
                    alt={`Placeholder ${index}`}
                    className="w-full h-auto object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-100"
                  />    
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Starter