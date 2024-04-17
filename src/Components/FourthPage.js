import React, { useState } from "react";
import Firstmath from "./assets/Firstmath.png";
import SecoundMath from "./assets/SecoundMath.png";
import thiredMath from "./assets/thiredMath.png";
import fourthMath from "./assets/fourthMath.png";
import FifthPage from "./FifthPage";

const FourthPage = ({increaseProgress}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initialize as disabled
  const [showSecoundPage, setShowSecoundPage] = useState(false);

  const options = [
    {
      src: `${Firstmath}`,
      title: "Arithmetic",
      dec: "Introductory",
    },
    {
      src: `${SecoundMath}`,
      title: "Basic Algebra",
      dec: "Foundational",
    },
    {
      src: `${thiredMath}`,
      title: "Intermediate Algebra",
      dec: "Intermediate",
    },
    {
      src: `${fourthMath}`,
      title: "Calculus",
      dec: "Advanced",
    },
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setIsButtonDisabled(false); // Enable the button when an option is selected
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected option:", selectedOption);
    setShowSecoundPage(true); // Update state to show the Fifthpage
  };

  return (
<div className="min-h-screen flex  items-center justify-center bg-gray-100">
  <div className="w-full max-w-4xl p-4 mx-auto">
    {showSecoundPage ? (
      <FifthPage increaseProgress={increaseProgress} />
    ) : (
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">
          Which are you most interested in?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3">
          Choose just one. This will help us get you started (but won't
          limit your experience).
        </p>

        <div className="p-4 sm:p-6 md:p-8 rounded-md flex flex-wrap justify-center items-center gap-4">
          <form onSubmit={handleSubmit} className=" md:flex">
            {options.map((option, index) => (
              <label
                key={index}
                onClick={handleOptionChange}
                className={`h-36 w-36 sm:h-48 sm:w-48 md:h-60 md:w-60 flex flex-col rounded-lg shadow-lg justify-center items-center cursor-pointer m-2 ${
                  selectedOption === option.title ? 'border border-red-500' : ''
                }`}
              >
                <img className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" src={option.src} alt={option.title} />
                <input
                  type="radio"
                  name="option"
                  value={option.title}
                  onChange={() => setSelectedOption(option.title)}
                  className="hidden"
                />
                <div className="flex flex-col gap-y-1 mt-2 text-center">
                  <span className="text-sm sm:text-base md:text-lg font-medium">
                    {option.title}
                  </span>
                  <span className="text-gray-400 text-xs sm:text-sm md:text-base">
                    {option.dec}
                  </span>
                </div>
              </label>
            ))}
          </form>
          <div onClick={increaseProgress}>
          <button
            onClick={handleSubmit}
            type="submit"
            className={`mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black ${
              isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isButtonDisabled}
          >
            Continue
          </button>
          </div>
     
        </div>
      </div>
    )}
  </div>
</div>

  );
};

export default FourthPage;
