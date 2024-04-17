import React, { useState } from 'react';
import image1 from "./assets/Congratsimage.png"
import FindingPage from './FindingPage';
import Lastpage from './Lastpage';
const FifthPage = ({increaseProgress}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize as disabled
    const [showSecoundPage, setShowSecoundPage] = useState(false);
  
 
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected option:', selectedOption);
        setShowSecoundPage(true);
      };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    {showSecoundPage ? (
      <Lastpage />
    ) : (
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex flex-col items-center justify-center bg-white">
          <div className="w-full max-w-md mx-auto">
            <img src={image1} alt="Image" className="w-full h-auto" />
          </div>
          <div className="w-full max-w-2xl p-4">
            <h2 className="text-2xl font-semibold mb-2 sm:text-3xl md:text-4xl">
              You're on your way!
            </h2>
            <p className="text-xl">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 mb-3">
              "Through its engaging and well-structured courses, Brilliant has taught me
              mathematical concepts that I previously struggled to understand. I now feel
              confident approaching both technical job interviews and real-world problem
              solving situations."
            </p>
            <p className="text-gray-400">— Jacob S.</p>
          </div>
        </div>
        <div className="mt-4">
          <div onClick={increaseProgress}>
               <button
            onClick={handleSubmit}
            type="submit"
            className="px-4 py-2 text-white bg-black rounded-md hover:bg-black"
          >
            Continue
          </button>
          </div>
       
        </div>
      </div>
    )}
  </div>
  );
};

export default FifthPage;
