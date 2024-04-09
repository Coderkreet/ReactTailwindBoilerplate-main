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
      <div>
        {showSecoundPage ? (
       <FifthPage increaseProgress ={increaseProgress}/>
        ) : (
          <div>
            <h2 className="text-4xl font-semibold mb-2">
              Which are you most interested in?
            </h2>
            <p className="text-gray-600 text-[1rem] mb-3">
              Choose just one. This will help us get you started (but won't
              limit your experience).
            </p>

            <div className="p-8 rounded-md flex flex-col justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className="flex justify-center items-center"
              >
                {options.map((option, index) => (
                  <label
                    key={index}
                    onClick={handleOptionChange}
                    className={`h-[15rem] w-[15rem] flex-col rounded-lg shadow-lg  justify-center flex items-center cursor-pointer ${
                      selectedOption === option.title ? 'border border-red-500' : ''
                    }`}
                  >
                    <img width="200" height="200" src={option.src} alt="boy" />
                    <input 
                      type="radio"
                      name="option"
                      value={option.title}
                      onChange={() => setSelectedOption(option.title)}
                      className="hidden"
                    />
                    <div className="flex flex-col gap-y-3 mt-5">
                      {option.title}
                      <div className="text-gray-400">
                        {option.dec}
                      </div>
                    </div>
                  </label>
                ))}
              </form>
              <div onClick={increaseProgress}>
                    <button
              onClick={handleSubmit}
                  type="submit"
                  className={`mt-4 px-4 py-2 bg-black text-white rounded-md  hover:bg-black ${
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
