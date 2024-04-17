import React, { useState } from 'react';
import image1 from "./assets/image.png"
import FourthPage from './FourthPage';
const Thiredpage = ({increaseProgress}) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize as disabled
    const [showSecoundPage, setShowSecoundPage] = useState(false);
  
 
    
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected option:', selectedOption);
        setShowSecoundPage(true);
      };


      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
          {showSecoundPage ? (
            <FourthPage increaseProgress={increaseProgress} />
          ) : (
            <div className="w-full max-w-4xl">
              <div className="flex flex-col lg:flex-row items-center justify-center bg-white p-4">
                <div className="lg:w-1/2">
                  <img src={image1} alt="Image" className="max-w-xs lg:max-w-lg mx-auto"/>
                </div>
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Which are you most interested in?</h2>
                  <p className="text-gray-600 mb-3">Choose just one. This will help us get you started (but won't limit your experience).</p>
                  <div onClick={increaseProgress}>
    <button    onClick={handleSubmit}
              type="submit"
          
              className={`mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black`}>
              Continue

            </button>
    </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    
};

export default Thiredpage;
