import { useEffect, useState } from "react";
import "./App.css";
import CounterValue from "./feature/countValue";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stopTime = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          clearInterval(stopTime);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(stopTime);
  }, []);

  return (
    <>
      <div className="bg-gray-200 flex justify-center  h-screen items-center w-full px-5 flex-col">
        <div className="text-center pb-10">
          <div className="text-2xl font-bold">count {count}</div>
        </div>
        <CounterValue />
      </div>
    </>
  );
}

export default App;
