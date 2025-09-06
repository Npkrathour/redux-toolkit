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
      <div>
        <div>count {count}</div>
      </div>
      <div className="flex h-screen items-center w-full">
        <CounterValue />
      </div>
    </>
  );
}

export default App;
