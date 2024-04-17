import React, { useState } from 'react';
import SecoundPage from './SecoundPage';

const Frontpage = ({ increaseProgress }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [showSecoundPage, setShowSecoundPage] = useState(false);

  const options = [
    {
      src: 'https://img.freepik.com/premium-photo/3d-animation-character-cartoon_113255-10754.jpg?w=740',
      title: 'Student or soon to be enrolled'
    },
    {
      src: 'https://img.freepik.com/premium-photo/professional-3d-rendering-businessman-character-modern-office-setting-confident-successful_131796-1880.jpg?w=740',
      title: 'Professional pursuing a career'
    },
    {
      src: 'https://img.freepik.com/premium-photo/dad-kid-closeup-happy-face_435599-11863.jpg?w=740',
      title: 'Parent of a school-age child'
    },
    {
      src: 'https://img.freepik.com/free-photo/view-3d-man-working-justice-law-field_23-2151228049.jpg?t=st=1713331955~exp=1713335555~hmac=11a8e477d7084020a57bf0883767c9faf0dfe53088576158b8e71fbf995163e7&w=740',
      title: 'Lifelong learner'
    },
    {
      src: 'https://img.freepik.com/premium-photo/teacher-smiled-warmly-photograph-capturing-moment-shared-learning-growth_85212-3391.jpg?w=740',
      title: 'Teacher'
    },
    {
      src: 'https://img.freepik.com/free-photo/3d-portrait-people_23-2150794013.jpg?t=st=1713331865~exp=1713335465~hmac=75fb3055deb7446c740d62410ed441f456db9b1f7247e3a76745d367a653ecc1&w=1060',
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {showSecoundPage ? (
             <SecoundPage increaseProgress={increaseProgress} />
      ) : (
        <div className="w-full max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2 text-center">Which describes you best?</h2>
          <p className="text-center text-gray-600 mb-3">This will help us personalize your experience.</p>
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
  );
};

export default Frontpage;
