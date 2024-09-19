import React, { useState } from "react";
import Button from "./Button";
import CategorySelector from "./CategorySelector";
import Heading from "./Heading";
import QuestionNumberSelector from "./QuestionNumberSelector";
import TimeLimit from "./TimeLimit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../_redux/store";
import { setDifficulty, setQuestion, setTotalTime } from "../_redux/quizMSTRedux";

const Card = React.memo(({quiz} : any) => {
  const dispatch = useDispatch<AppDispatch>();
  const timeForEachQuestion = useSelector(
    (state: RootState) => state.QuizMST
  );

  const [quizMAIN, setQuiz] = useState({
    totalTime: "",
    totalQuestion:"",
    Difficulty: ""
  })

  const handleButtonClick = () => {

    dispatch(setTotalTime(quizMAIN.totalTime));
    dispatch(setQuestion(quizMAIN.totalQuestion));
    dispatch(setDifficulty(quizMAIN.Difficulty));

  }

  console.log(timeForEachQuestion)


  return (
    <div className="p-[0.7rem] md:p-[1.3rem]  border-2 rounded-lg  flex flex-col">
      <div>
        <Heading title={quiz.tags[0]} label={`Test your ${quiz.tags[0]} Knowelge`} />
        <CategorySelector Difficulty={["Easy", "Medium", "Hard"]} handleQuiz={setQuiz} />
        <QuestionNumberSelector handleQuiz={setQuiz} />
        <TimeLimit handleQuiz={setQuiz} />
        <Button buttonClick={handleButtonClick} />
      </div>
    </div>
  );
});

export default Card;
