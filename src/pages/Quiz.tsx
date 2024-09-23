import { useEffect, useState } from "react";
import GreenTick from "../assets/svgs/GreenTick";
import Stopwatch from "../assets/svgs/Stopwatch";
import WrongTick from "../assets/svgs/WrongTick";
import { useNavigate, useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../_redux/store";
import { setCurrentQuestion } from "../_redux/quizMSTRedux";

interface ToastProps {
  message: string;
  type: "success" | "error"; // You can define specific strings or use 'string'
}

const Quiz = () => {
  const { id, qid } = useParams();
  const navigate = useNavigate();
  const [selectAnswer, setselectAnswer] = useState<string[]>([]);
  const [isCurrect, setIsCurrect] = useState<boolean | null>(false)
  const [showToast, setShowToast] = useState<boolean | null>(false);
  const [toastMessage, setTosatMessage] = useState<string>("");
  const [toastType, setToastType] = useState<string>("");
  const [resetFlag, setResetFlag] = useState<boolean>(false); 
  const dispatch = useDispatch<AppDispatch>();


  const allSelectedQuestions = useSelector(
    (state: any) => state.QuizMST.randomQuestions.data
  );

  const {filteredQuestion : data, index: questionInded } = useGetData(qid);



  const [timeTaken, setTimeTaken] = useState<number>(0);
  
  console.log(timeTaken);
  // Store time taken for the current question
  const handleTimeEnd = (timeTaken: number) => {
    console.log(timeTaken);
    
    setTimeTaken(timeTaken); // Store the time taken
  };


    useEffect(() => {

      const  isAnyQuestionWithAnswerd = allSelectedQuestions.filter((item) => item.isAnswered)

      if(isAnyQuestionWithAnswerd){
       const getNextQuestion =  chooseNextQuestion()


       console.log(getNextQuestion)

       if(getNextQuestion){
         navigate(`/quiz/${id}/${getNextQuestion.id}`);
       } else {
        navigate('/summary')
        console.log("Redirect to summary page  all the question is overed");        
       }
      } else {
        console.log("Nothing will happen")
      }

    },[allSelectedQuestions])


    const totalCurrectAnswer = allSelectedQuestions.filter((question) =>  question.isAnswered && question.isCorrect);

    const totalWrongAnswer =  allSelectedQuestions.filter((question) => 
    question.isAnswered && !question.isCorrect
    );


    console.log("Total Right Answer...", totalCurrectAnswer);
    console.log("Total Wrong Answer...", totalWrongAnswer);
    
    const { allSec, totalSelect } = useSelector((state: any) => ({
      allSec: state.QuizMST.timeForEachQuestionInSec.data,
      totalSelect: state.QuizMST.userSelectedQuestion.data,
    }));
  
    // Calculate initial time for the timer based on allSec and totalSelect
    const initialSeconds = allSec / totalSelect;
  


  function chooseNextQuestion() {
  
        const filterUnAnswedData = allSelectedQuestions.filter((item: any) => !item.isAnswered)


    if (filterUnAnswedData.length) {
      return filterUnAnswedData[0];
    } else {
      return false;
    }
  }

  const handleNextQuestion = (e) => {
    e.preventDefault();
    setResetFlag((prev) => !prev);
    console.log(timeTaken);
    
    const updatedData = {
      ...data,
      isAnswered: true,
      isCurrent: false,
      isCorrect: isCurrect,
      userAnswer: selectAnswer,
      timeTaken: timeTaken
    };
    dispatch(setCurrentQuestion(updatedData));


    const nextQuestion = chooseNextQuestion();

    console.log(nextQuestion, "Next question");
    
    if (nextQuestion) {
      navigate(`/quiz/${id}/${nextQuestion.id}`);
    } else {
      navigate('/summary');
    }
  };
  
  

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

  function Options({ option, optionCount, isCurrect }) {
    const handleSelect = (item: string) => {
      if (!data.type === "multiple choice") {
        debugger;
        setselectAnswer((prev) => [...prev, item]);
      } else {
        setselectAnswer(item);
      }

      setShowToast(true);

      setTimeout(() => {
        setTosatMessage("");
        setToastType("");
        setShowToast(false);
      }, 3000);

      if (isCurrect) {
        setIsCurrect(true)
        setTosatMessage("You are currect");
        setToastType("success");
      } else {
        setIsCurrect(false)
        setToastType("fail");
        setTosatMessage("Better luck next time");
      }
    };

    return (
      <button
        onClick={() => handleSelect(option)}
        className={`text-sm md:text-base transition-transform duration-200 ease-in-out active:scale-95 flex p-4 px-4 border rounded-md font-semibold gap-6  border-[#EBEBED]  ${
          selectAnswer?.includes(option)
            ? "bg-black text-white"
            : "bg-transparent text-black"
        } `}
      >
        {/* option index */}
        <div>
          <span className="border p-2 px-3 rounded-md">{optionCount}</span>
        </div>
        {/* Options itself */}
        <div>{option}</div>
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
                {allSelectedQuestions[0].tags[0]}
              </span>
            </div>
            {/* Timer */}
            <div className="flex gap-2 ml-[-4px]">
              <Stopwatch />
              
              <Timer
            initialSeconds={initialSeconds} 
            onTimeEnd={handleTimeEnd}
            resetFlag={resetFlag}
          />
            </div>
          </div>
          {/* Questions result Right side */}
          <div className="flex text-xl border-2 rounded-lg items-center  gap-5 p-2 px-3">
            <div className="flex gap-2 items-center justify-center">
              <GreenTick />
              <span className="text-[#418C24]">{totalCurrectAnswer.length || 0}</span>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <span className="text-[#E62F2E]">{totalWrongAnswer.length || 0}</span>
              <WrongTick />
            </div>
          </div>
        </div>
        {/* Questions itself */}
        <div className="border-2 text-sm md:text-base rounded-lg  text-[#9399A2] flex gap-4 items-center px-6 p-3">
          {/* Question Progress Bar */}
          <div className="flex flex-col relative justify-center">
            <div>
              <span className="font-bold text-black">{questionInded + 1}</span>
              <span className="text-[21px] absolute top-0 left-0">_</span>
            </div>
            <span className="li">{allSelectedQuestions.length}</span>
          </div>
          {/* Current Question */}
          <div className="">
            <p>{data?.questionText}</p>
          </div>
        </div>
        {/* Code Conetnt */}
        {data?.codeAvailable ? (
          <div className="bg-slate-300 p-3">
            <textarea className="w-full p-2 tex-xs h-[10rem] bg-slate-300 ">
              {data.codeContent}
            </textarea>
          </div>
        ) : null}

        {/* Questions Option */}
        <div className="flex flex-col gap-2 mt-4">
          {data.options.map((option: object, item: number) => (
            <Options
              option={option?.text}
              optionCount={item + 1}
              isCurrect={option?.isCorrect}
            />
          ))}
        </div>
        <div className="text-center mt-5 ">
        <button className="bg-[#111827] text-white"
        onClick={handleNextQuestion}
          // onClick={(e) => {
          //   e.preventDefault();

          //   const updatedData = {
          //     ...data,
          //     isAnswered: true,
          //     isCurrent: false,
          //     isCorrect:isCurrect,
          //     userAnswer: selectAnswer,
          //   };
          //   dispatch(setCurrentQuestion(updatedData));
          // //   setTimeout(() => {
          // //     const nextQuestion = chooseNextQuestion();
          // //     console.log(nextQuestion);
          // //     navigate(`/quiz/${id}/${33}`);
          // //   }, 2000);
          // }}
        >
          Next
        </button>
        </div>
      </div>

      {/* toast notificatiion */}
      {showToast && <Toast message={toastMessage} type={toastType} />}
    </div>
  );
};

export default Quiz;

function Toast({ message, type }: ToastProps) {
  const backgroundColor = type === "success" ? "bg-green-500" : "bg-red-500";

  const showFeedbackMsg =
    type === "success" ? "you get it right!" : "you get it wrong!";

  return (
    <div
      className={`flex flex-col justify-center absolute bottom-2 right-4 rounded w-[10rem] sxs:w-[14rem] md:w-[18rem] h-[3rem]  sxs:h[3rem] md:h-[4rem] text-white p-2 sxs:p-3 md:p-3  ${backgroundColor}`}
    >
      <div className="text-sm  font-medium">{message}</div>
      <div className="text-xs">{showFeedbackMsg}</div>
    </div>
  );
}




function Timer({
  initialSeconds,
  onTimeEnd,
  resetFlag,
}: {
  initialSeconds: number;
  onTimeEnd: (timeTaken: number) => void;
  resetFlag: boolean;
}) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  // Reset timer when `resetFlag` or `initialSeconds` change
  useEffect(() => {
    setSecondsLeft(initialSeconds);
  }, [initialSeconds, resetFlag]);

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else {
      onTimeEnd(initialSeconds - secondsLeft); 
    }
  }, [secondsLeft, initialSeconds, onTimeEnd]);

  useEffect(() => {
    if (secondsLeft === 0) {
      onTimeEnd(initialSeconds - secondsLeft);
    }
  }, [secondsLeft, initialSeconds, onTimeEnd]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = (secondsLeft % 60);

  return (
    <p>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </p>
  );
}



// function Timer({
//   initialSeconds,
//   onTimeEnd,
//   resetFlag,
// }: {
//   initialSeconds: number;
//   onTimeEnd: (timeTaken: number) => void;
//   resetFlag: boolean;
// }) {
//   const { minutes, seconds } = useTimer({
//     initialSeconds,
//     onTimeEnd,
//     resetFlag,
//   });

//   return (
//     <p>
//       {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//     </p>
//   );
// }
