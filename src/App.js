import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
    // count = count - 1;
  }
  function increaseHandler() {
    setCount(count + 1);
    // count = count - 1;
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] bg-[#344151] gap-10">
      <div className=" text-[#0398d4] font-medium text-2xl">
        Increment & Decerement{" "}
      </div>
      <div className="flex flex-row items-center justify-center bg-white gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className=" border-r-2 text-center w-20 border[#bfbfbf] text-5xl"
        >
          -
        </button>
        <div className=" font-bold gap-12 text-5xl">{count}</div>
        <button
          onClick={increaseHandler}
          className=" border-l-2 text-center w-20 border[#bfbfbf] text-5xl"
        >
          +
        </button>
      </div>
      <button onClick={resetHandler} className="text-white bg-[#0398d4] px-5 py-2 rounded-md text-5xl">
      Reset
      </button>
    </div>
  );
}

export default App;
