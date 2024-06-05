import React from 'react';

const About = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mt-8">
      <h2 className="text-xl font-semibold mb-4">This fyp Portal is developed by:</h2>
      <div className="mb-4">
        <p className="text-md font-medium mb-1">Student 1: </p>
        <p className="border border-gray-300 text-bold rounded px-3 py-2 w-full">Hamza Zafar  <span className=' ml-8 text-blue-600 '>Fa-20-BSCS-156</span></p>
      </div>
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">Student 2:</p>
        <p className="border border-gray-300 text-bold rounded px-3 py-2 w-full">Talha Nadeem   <span className=' ml-8 text-blue-600 ' >Fa-20-BSCS-145</span></p>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Supervised by:</h3>
        <div className="bg-gray-100 rounded p-4">
          <p className="mb-2"> Muhammad Hamas</p>
       
        </div>
      </div>
    </div>
  );
};

export default About;
