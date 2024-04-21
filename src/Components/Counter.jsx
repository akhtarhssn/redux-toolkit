import React from "react";
import bgCover from "../assets/geometric-paper-style.jpg";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state?.count);
  const dispatch = useDispatch();

  console.log(count);

  return (
    <div className="h-screen flex justify-center items-center bg-navyBlue">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgCover})`,
        }}
      ></div>
      <div className="w-[650px] h-[400px] rounded-xl shadow-md bg-gray-300 bg-opacity-20 backdrop-blur-md backdrop-filter backdrop-saturate-150 p-10 text-white">
        <h1 className="text-center text-xl font-bold text-gray-200">
          Redux-toolkit Counter
        </h1>
        <div className="flex justify-center items-center gap-10 h-full">
          <button
            className="border-2 border-gray-200 px-10 py-4 rounded-xl"
            onClick={() => dispatch(decrement())}
          >
            <FiMinus />
          </button>
          <p>{count}</p>
          <button
            className="border-2 border-gray-200 px-10 py-4 rounded-xl"
            onClick={() => dispatch(increment())}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
