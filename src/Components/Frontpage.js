import React, { useState } from 'react';
import SecoundPage from './SecoundPage';

const Frontpage = ({ increaseProgress }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showSecoundPage, setShowSecoundPage] = useState(false);

  const options = [
    {
      src: 'https://img.icons8.com/doodle/48/boy.png',
      title: 'Student or soon to be enrolled'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Professional pursuing a career'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Parent of a school-age child'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Lifelong learner'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Teacher'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Other'
    }
  ];

  const handleOptionChange = (title) => {
    setSelectedOption(title);
    setIsButtonDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
    setShowSecoundPage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {showSecoundPage ? (
        <SecoundPage increaseProgress={increaseProgress} />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold mb-2">Which describes you best?</h2>
          <p className="text-gray-600 text-[1rem] mb-3">This will help us personalize your experience.</p>
          <div className="p-8 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
              {options.map((option, index) => (
                <label 
                  key={index} 
                  onClick={() => handleOptionChange(option.title)} 
                  className={`h-[3rem] w-[30rem] rounded-lg shadow-lg flex items-center mb-4 cursor-pointer ${
                    selectedOption === option.title ? 'border border-red-500' : ''
                  }`}
                >
                  <img width="48" height="48" src={option.src} alt="boy" />
                  <span className="ml-2">{option.title}</span>
                </label>
              ))}
              <button
                type="submit"
                className={`mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black ${
                  isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isButtonDisabled}
                onClick={increaseProgress}
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Frontpage;
