import React, { useState, useEffect } from 'react';
import LastpageImg from './assets/LastpageImg.png';
import FindingPage from './FindingPage';

const Lastpage = () => {
  const [showFindingPage, setShowFindingPage] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFindingPage(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []); // Run only once on component mount

  if (showFindingPage) {
    return <FindingPage />;
  }

  // Render Lastpage content after 3 seconds
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div>
        <h2 className="text-4xl font-semibold mb-2">Learning paths based on your answers</h2>
        <p className="text-gray-600 text-[1rem] mb-3">Choose one to get started. You can switch anytime.</p>
        <div className="p-8 rounded-md flex gap-x-8">
          <div className='flex gap-x-3 border-[2px] rounded-lg p-5 relative'>
            <span className='bg-yellow-400 absolute rounded-xl top-[-1rem] left-[30%] w-[9rem] flex justify-center items-center h-[2rem]'>
              Most Popular
            </span>
            <div className='w-[15rem]'>
              <h1 className='text-[1.2rem]'>
                <span className='font-bold'>Mathematical Thinking</span> 
                Build your foundational skills in algebra, geometry, and probability.
              </h1>
            </div>
            <img src={LastpageImg} className='w-[10rem] h-[10rem]' alt=""/>
          </div>
          <div className='flex gap-x-3 border-[2px] rounded-lg p-5'>
            <div className='w-[15rem]'>
              <h1 className='text-[1.2rem]'>
                <span className='font-bold'>Foundational Math</span> 
                Build your foundational skills in algebra, geometry, and probability.
              </h1>
            </div>
            <img src={LastpageImg} className='w-[10rem] h-[10rem]' alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
