import React, { useState } from 'react';
import Thiredpage from './Thiredpage';

const SecoundPage = ({increaseProgress}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize as disabled
  const [showSecoundPage, setShowSecoundPage] = useState(false);

  const options = [
    {
      src: 'https://img.icons8.com/doodle/48/boy.png',
      title: 'Learning specific skills to advance my career'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: "Exploring new topics I'm interested in"
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Refreshing my math foundations'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
      title: 'Exercising my brain to stay sharp'
    },
    {
      src: 'https://img.icons8.com/stickers/100/old-man.png',
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div>
        {showSecoundPage ? (
          <Thiredpage increaseProgress ={increaseProgress}  />
        ) : (
          <div>
            <h2 className="text-4xl font-semibold mb-2">Which are you most interested in?</h2>
            <p className="text-gray-600 text-[1rem] mb-3">Choose just one. This will help us get you started (but won't limit your experience).</p>

            <div className="p-8 rounded-md">
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                {options.map((option, index) => (
                  <label
                    key={index}
                    onClick={() => handleOptionChange(option.title)}
                    className={`h-[5rem] w-[25rem] rounded-lg shadow-lg flex items-center mb-4 cursor-pointer ${
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
    </div>
  );
};

export default SecoundPage;
