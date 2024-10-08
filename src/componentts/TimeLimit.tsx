import { useCallback, useState } from "react";
import { LiftPropUp } from "../interfaces/props";
import { RootState } from "../_redux/store";
import { useSelector } from "react-redux";



const TimeLimit = ({handleQuiz }: LiftPropUp) => {
  const [time, setTime] = useState<number>();
const timeForEachQuestion = useSelector(
  (state: RootState) => state.QuizMST.totalTime.data
);


const handleTime = useCallback((event: string) => {
  const convertEventToNumber = Number(event)
  setTime(convertEventToNumber)
  if (time !== timeForEachQuestion) {
    // console.log(time)
    handleQuiz((prevQuiz: object) => ({
      ...prevQuiz,
      totalTime: convertEventToNumber, 
    }));  
    // dispatch(setTotalTime(e));
  }
}, [])
  
  // dispatch(setQuestion(e))
  return (
    <div className="flex mt-3 md:mt-8 justify-between items-center	">
      <h4 className="font-bold text-xs md:text-sm ">Time Limit</h4>
      <div className="flex gap-2 justify-between items-center">
        <input
        value={time}
        onChange={(e) => handleTime(e.target.value)}
          type="text"
          id="first_name"
          className="w-[3rem] md:w-[5rem] text-xxs md-text-xs  bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="20"
          required
        />
        <span className="font-semibold text-sm">minutes</span>
        
      </div>
    </div>
  );
};

export default TimeLimit;
