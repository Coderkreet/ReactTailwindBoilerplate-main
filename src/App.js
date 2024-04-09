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
    <div>
       <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
      <div className="bg-green-500 h-4" style={{ width: `${(progress / 5) * 100}%` }}></div>
      </div>

      <Frontpage increaseProgress = {increaseProgress}/>
    </div>
  );
}

export default App;
