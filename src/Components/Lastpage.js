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
    <div className="flex flex-col  items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full px-4  sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Learning paths based on your answers</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3">Choose one to get started. You can switch anytime.</p>
        <div className="p-4 sm:p-6 md:p-8  rounded-md flex flex-wrap gap-4">
          <div className="flex flex-col sm:flex-row gap-4 border-2 rounded-lg p-5 relative w-full sm:w-auto">
            <span className="bg-yellow-400 absolute rounded-xl top-[-1rem] left-[30%] sm:left-[10%] w-36 flex justify-center items-center h-8">
              Most Popular
            </span>
            <div className="w-full sm:w-60">
              <h1 className="text-base sm:text-lg">
                <span className="font-bold">Mathematical Thinking</span> 
                Build your foundational skills in algebra, geometry, and probability.
              </h1>
            </div>
            <img src={LastpageImg} className="w-24 h-24 sm:w-40 sm:h-40" alt="Mathematical Thinking"/>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 border-2 rounded-lg p-5 w-full sm:w-auto">
            <div className="w-full sm:w-60">
              <h1 className="text-base sm:text-lg">
                <span className="font-bold">Foundational Math</span> 
                Build your foundational skills in algebra, geometry, and probability.
              </h1>
            </div>
            <img src={LastpageImg} className="w-24 h-24 sm:w-40 sm:h-40" alt="Foundational Math"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lastpage;
