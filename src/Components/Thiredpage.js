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
    <div>
            {showSecoundPage ? (
        <FourthPage increaseProgress ={increaseProgress}/>
      ) : (
 
    <div className='flex flex-col justify-center items-center'>
        
    

    <div className="flex  items-center justify-center bg-white">

<div>
    <img src={image1} alt="Image" width={350} height={350}/>
   </div>
    <div>
                 <h2 className="text-4xl font-semibold mb-2">Which are you most interested in?</h2>
        <p className="text-gray-600 text-[1rem] mb-3">Choose just one. This will help us get you started (but won't limit your experience).</p>

        </div>
 
    </div>
    <div onClick={increaseProgress}>
    <button    onClick={handleSubmit}
              type="submit"
          
              className={`mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black`}>
              Continue

            </button>
    </div>
   
  
    </div>
)}
    </div>
  );
};

export default Thiredpage;
