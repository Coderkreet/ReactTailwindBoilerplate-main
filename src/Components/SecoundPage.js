import React, { useState } from 'react';
import Thiredpage from './Thiredpage';

const SecoundPage = ({increaseProgress}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize as disabled
  const [showSecoundPage, setShowSecoundPage] = useState(false);

  const options = [
    {
      src: 'https://img.freepik.com/free-vector/climbing-bar-chart_1308-111392.jpg?t=st=1713332124~exp=1713335724~hmac=da5614d72b5211ffe4e4c54aced1219c52b0b468136a7abbc1000bf9a8446d69&w=740',
      title: 'Learning specific skills to advance my career'
    },
    {
      src: 'https://img.freepik.com/free-vector/planet-with-face_1308-82461.jpg?t=st=1713332194~exp=1713335794~hmac=cd3f25dc65132aea41d4a09753e25787d5eaddc0229d976d766340761a9bbc3f&w=740',
      title: "Exploring new topics I'm interested in"
    },
    {
      src: 'https://img.freepik.com/free-photo/person-with-huge-pencil_1048-1703.jpg?t=st=1713332245~exp=1713335845~hmac=224717d797ec528a1600a0386826782d6ee69bfc5ec4928c02d7d5905c14530e&w=360',
      title: 'Refreshing my math foundations'
    },
    {
      src: 'https://img.freepik.com/premium-photo/3d-illustration-white-male-reaching-goals_80392-6.jpg?w=740',
      title: 'Exercising my brain to stay sharp'
    },
    {
      src: 'https://img.freepik.com/free-psd/pair-eyes-illustration_23-2150689432.jpg?t=st=1713332360~exp=1713335960~hmac=6ee0a7db60236a8a14d957a5f778c4312895f3f12422d7544c496265c9cf7035&w=996',
      title: 'Something else'
    },
  ];

  const handleOptionChange = (title) => {
    setSelectedOption(title);
    setIsButtonDisabled(false); // Enable the button when an option is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected option:', selectedOption);
    setShowSecoundPage(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        {showSecoundPage ? (
          <Thiredpage increaseProgress={increaseProgress} />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Which are you most interested in?</h2>
            <p className="text-gray-600 mb-3">Choose just one. This will help us get you started (but won't limit your experience).</p>

            <div className="p-4 sm:p-6 md:p-8 rounded-md">
              <form onSubmit={handleSubmit} className="flex flex-col items-center">
                {options.map((option, index) => (
                  <label
                    key={index}
                    onClick={() => handleOptionChange(option.title)}
                    className={`h-16 w-full sm:w-96 rounded-lg shadow-lg flex items-center mb-4 cursor-pointer p-2 ${
                      selectedOption === option.title ? 'border border-red-500' : ''
                    }`}
                  >
                    <img className='w-12 h-12 rounded-full' src={option.src} alt={option.title} />
                    <span className="ml-2 text-sm sm:text-base">{option.title}</span>
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
    </div>
  );
};

export default SecoundPage;
