import { useState } from "react";
import GreenTick from "../assets/svgs/GreenTick";
import Stopwatch from "../assets/svgs/Stopwatch";
import WrongTick from "../assets/svgs/WrongTick";
import { useParams } from "react-router-dom";

interface ToastProps {
  message: string;
  type: "success" | "error"; // You can define specific strings or use 'string'
}

const Quiz = () => {
  const { id, qid } = useParams();

  console.log(id, qid)
  const [selectAnswer, setselectAnswer] = useState<string | null>(null);
  // const [showToast, setShowToast] = useState<boolean | null>(true);
  // const [toastMessage, setTosatMessage] = useState<string>("");
  // const [toastType, setToastType] = useState<string>("");



  // const handleAnswer = (isCorrect:boolean) => {
  //   if (isCorrect) {
  //     setTosatMessage('Correct Answer!');
  //     setToastType('success');
  //   } else {
  //     setTosatMessage('Wrong Answer!');
  //     setToastType('error');
  //   }
  //   setShowToast(true);

  //   setTimeout(() => {
  //     setShowToast(false);
  //   }, 3000);
  // };

  function Options() {
    const handleSelect = (item: string) => {
      setselectAnswer(item);
    };

    return (
      <button
        onClick={() => handleSelect("1")}
        className={`text-sm md:text-base transition-transform duration-200 ease-in-out active:scale-95 flex p-4 px-4 border rounded-md font-semibold gap-6  border-[#EBEBED]  ${
          selectAnswer === "1"
            ? "bg-black text-white"
            : "bg-transparent text-black"
        } `}
      >
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
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="w-[20rem] sxs:w-[30rem] md:w-[46rem]">
        {/* Headers */}
        <div className="py-2 flex  items-center justify-between  w-full">
          <div className="text-sm md:text-base text-[#ACB8C7] flex flex-col gap-2">
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
        <div className="border-2 text-sm md:text-base rounded-lg  text-[#9399A2] flex gap-4 items-center px-6 p-3">
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
        <div className="flex flex-col gap-2 mt-4">
          <Options />
          <Options />
          <Options />
          <Options />
        </div>
      </div>

      {/* toast notificatiion */}
      {/* {showToast && <Toast message={"Correct Answer!"} type={"success"} />} */}
    </div>
  );
};

export default Quiz;

function Toast({ message, type }: ToastProps) {
  const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

  const showFeedbackMsg =
    type === "success" ? "you get it right!" : "you get it wrong!";

  return (
    <div className={`flex flex-col justify-center absolute bottom-2 right-4 rounded w-[10rem] sxs:w-[14rem] md:w-[18rem] h-[3rem]  sxs:h[3rem] md:h-[4rem] text-white p-2 sxs:p-3 md:p-3  ${backgroundColor}`}>
      <div className="text-sm  font-medium">{message}</div>
      <div className="text-xs">{showFeedbackMsg}</div>
    </div>
  );
}
