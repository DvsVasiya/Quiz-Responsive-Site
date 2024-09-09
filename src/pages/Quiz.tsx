import { useState } from "react";
import GreenTick from "../assets/svgs/GreenTick";
import Stopwatch from "../assets/svgs/Stopwatch";
import WrongTick from "../assets/svgs/WrongTick";

const Quiz = () => {
  function Options() {
    const [selectAnswer, setselectAnswer] = useState<string | null>(
      null
    );
  
    const handleSelect = (item: string) => {
      setselectAnswer(item); 
    };
    return (
      <button
      onClick={() => handleSelect('1')}

      className={` transition-transform duration-200 ease-in-out active:scale-95 flex p-4 px-4 border rounded-md font-semibold gap-6  border-[#EBEBED]  ${
        selectAnswer === '1'
                       ? "bg-black text-white"
                       : "bg-transparent text-black"
                   } `}>
        {/* option index */}    
        <div>
          <span className="border p-2 px-3 rounded-md">1</span>
        </div>
        {/* Options itself */}
        <div>Greeks</div>
      </button>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center h-full ">
      {/* Headers */}
      <div className="py-2 flex  items-center justify-between w-[46rem] ">
        <div className="text-base text-[#ACB8C7] flex flex-col gap-2">
          {/* Topic */}
          <div className="flex gap-3 items-center justify-center">
            <span>Topic</span>
            <span className="p-1 px-2  text-white bg-[#111827] rounded-lg">
              History
            </span>
          </div>
          {/* Timer */}
          <div className="flex gap-2 ml-[-4px]">
            <Stopwatch />
            <div>1m 20s</div>
          </div>
        </div>
        {/* Questions result Right side */}
        <div className="flex text-xl border-2 rounded-lg items-center  gap-5 p-2 px-3">
          <div className="flex gap-2 items-center justify-center">
            <GreenTick />
            <span className="text-[#418C24]">0</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <span className="text-[#E62F2E]">0</span>
            <WrongTick />
          </div>
        </div>
      </div>
      {/* Questions itself */}
      <div className="border-2 text-base w-[46rem] rounded-lg  text-[#9399A2] flex gap-4 items-center px-6 p-3">
        {/* Question Progress Bar */}
        <div className="flex flex-col relative justify-center">
          <div>
            <span className="font-bold text-black">1</span>
            <span className="text-[21px] absolute top-0 left-0">_</span>
          </div>
          <span className="li">5</span>
        </div>
        {/* Current Question */}
        <div className="">
          <p>
            Which anciant civilization developed the first known system of
            writing?
          </p>
        </div>
      </div>
      {/* Questions Option */}
      <div className="flex flex-col gap-2 w-[46rem] mt-4">
        <Options />
        <Options />
        <Options />
        <Options />
      </div>
    </div>
  );
};

export default Quiz;
