import React from "react";
import { increment, decrement, reset } from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Plus, Minus, RotateCcw } from "lucide-react";
const CounterValue = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function incrementClick() {
    dispatch(increment());
  }

  function decrementClick() {
    dispatch(decrement());
  }

  function resetClick() {
    dispatch(reset());
  }

  return (
    <>
      <div className="border max-w-2xl mx-auto w-full p-10 rounded-2xl border-gray-300">
        <h1 className="text-center font-bold text-3xl pb-8">
          Learn Redux Toolkit
        </h1>
        <div className="pb-5 text-2xl font-semibold">Count Value : {count}</div>
        <div className="flex justify-center gap-4 pt-2 items-center">
          {" "}
          <button
            className="px-5 py-2 text-sm rounded-md  font-medium border shadow-xs cursor-pointer border-gray-300"
            onClick={incrementClick}
          >
            <Plus />
          </button>
          <button
            className="px-5 py-2 text-sm rounded-md  font-medium border shadow-xs cursor-pointer border-gray-300"
            onClick={decrementClick}
          >
            <Minus />
          </button>
          <button
            className="px-5 py-2 text-sm rounded-md  font-medium border shadow-xs cursor-pointer border-gray-300"
            onClick={resetClick}
          >
            <RotateCcw />
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterValue;
