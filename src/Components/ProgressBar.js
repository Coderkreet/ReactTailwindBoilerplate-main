import React, { useState } from 'react';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 4) {
      setProgress(progress + 1);
    }
  };

  return (
    <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div className="bg-green-500 h-4" style={{ width: `${(progress / 4) * 100}%` }}></div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={increaseProgress}>
        Increase Progress
      </button>
    </div>
  );
};

export default ProgressBar;
