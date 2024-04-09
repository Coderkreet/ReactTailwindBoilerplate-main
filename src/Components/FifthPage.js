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
    <div>
            {showSecoundPage ? (
        <Lastpage/>
      ) : (
 
    <div className='flex flex-col justify-center items-center'>
        
    

    <div className="flex  items-center justify-center bg-white">

<div>
    <img src={image1} alt="Image" width={400} height={400}/>
   </div>
    <div className='flex flex-col w-[40rem]'>
                 <h2 className="text-4xl font-semibold mb-2">You're on your way!</h2>
                 <p>⭐⭐⭐⭐⭐</p>
        <p className="text-gray-600 text-[1rem] mb-3">"Through its engaging and well-structured courses, Brilliant has taught me
mathematical concepts that I previously struggled to understand. I now' feel
confident approaching both technical job interviews and real world problem
solving situations."</p>

<p className='text-gray-400'>— Jacob S.</p>

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

export default FifthPage;
