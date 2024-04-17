import { useState } from "react";
import Frontpage from "./Components/Frontpage";


function App() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 5) {
      setProgress(progress + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="w-full max-w-xl bg-gray-200 rounded-lg overflow-hidden mb-6">
        <div className="bg-blue-800 h-2" style={{ width: `${(progress / 5) * 100}%` }}></div>
      </div>

      <Frontpage increaseProgress={increaseProgress}  />
    </div>
  );
}


export default App;
