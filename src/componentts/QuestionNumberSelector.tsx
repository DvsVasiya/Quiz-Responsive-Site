import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../_redux/store";
import { setQuestion } from "../_redux/quizMSTRedux";
import React, { useCallback, useState } from "react";
import { LiftPropUp } from "../interfaces/props";

const QuestionNumberSelector =  React.memo(({handleQuiz}: LiftPropUp) => {
  const [selectedQuestion, setSelectedQuestion] = useState();
  
    // const dispatch = useDispatch<AppDispatch>();
  const userSelectedQuestion = useSelector(
    (state: RootState) => state.QuizMST.userSelectedQuestion.data
  );

  console.log('component renderring');


  const handleQuestionSelect = useCallback((e: string) => {
    setSelectedQuestion(e)
    if (selectedQuestion !== userSelectedQuestion) {
      handleQuiz((prevQuiz: object) => ({
        ...prevQuiz,
        totalQuestion: e, 
      }));  
      // dispatch(setQuestion(selectedQuestion));
    }
    
    // dispatch(setQuestion(e));
  }, []);

  return (
    <div className="flex mt-6 md:mt-8 justify-between items-center	">
      <h4 className="font-bold text-xs md:text-sm ">Questions</h4>
      <div className="flex gap-2">
        <select
          value={selectedQuestion}
          onChange={(e) => handleQuestionSelect(e.target.value)}
          id="questions"
          className="text-xxs md-text-xs bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
});

export default QuestionNumberSelector;
