import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute left-10 top-28 z-50 p-10 bg-black bg-opacity-10 text-white  max-w-2xl">
      <h1 className="text-5xl font-extrabold mb-4">{title}</h1>
      <p className="text-xl mb-6">{overview}</p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-red-600 rounded-full text-white font-bold text-lg flex items-center hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
          Play
        </button>
        <button className="px-6 py-2 border border-white rounded-full text-white font-bold text-lg bg-transparent hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
