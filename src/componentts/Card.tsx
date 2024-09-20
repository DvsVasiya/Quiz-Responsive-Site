import React, { useState } from "react";
import Button from "./Button";
import CategorySelector from "./CategorySelector";
import Heading from "./Heading";
import QuestionNumberSelector from "./QuestionNumberSelector";
import TimeLimit from "./TimeLimit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../_redux/store";
import {
  setDifficulty,
  setQuestion,
  setSelectedQuiz,
  setTotalTime,
} from "../_redux/quizMSTRedux";
import { useNavigate, useSearchParams } from "react-router-dom";
import QuizData from "../data/quiz_data.json";

const Card = React.memo(({ quiz }: any) => {
  const [userSlection, setuserSlection] = useState({
    totalTime: "",
    totalQuestion: "",
    Difficulty: "",
  });



 

  const dispatch = useDispatch<AppDispatch>();
  // const userSelectedData = useSelector(
  //   (state: RootState) => state.QuizMST.userSelectedQuestion
  // );
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log(quiz)
    console.log("Button clicked...");
    dispatch(setTotalTime(userSlection.totalTime));
    dispatch(setQuestion(userSlection.totalQuestion));
    dispatch(setDifficulty(userSlection.Difficulty));
    dispatch(setSelectedQuiz(quiz.id));
 
    navigate(`/quiz/${quiz.id}/${34}`);

    const filterData = QuizData.filter((item) => {
      return item.tags === quiz.tags;
    })[0];

    const filteredDataQuestion = randomUniqueNum(
      filterData.allQuestion.length,
      userSlection.totalQuestion
    );
    function randomUniqueNum(range: number, outputCount: number) {
      const arr = filterData.allQuestion;
  
      for (let i = 1; i <= range; i++) {
        arr.push(i);
      }
      const result = [];
  
      for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
      }
  
      return result;
    }

    console.log(filteredDataQuestion);
  };

  return (
    <div className="p-[0.7rem] md:p-[1.3rem]  border-2 rounded-lg  flex flex-col">
      <div>
        <Heading title={quiz.tags} label={`Test your ${quiz.tags} Knowelge`} />
        <CategorySelector
          Difficulty={["Easy", "Medium", "Hard"]}
          handleQuiz={setuserSlection}
        />
        <QuestionNumberSelector handleQuiz={setuserSlection} />
        <TimeLimit handleQuiz={setuserSlection} />
        <Button buttonClick={handleButtonClick} />
      </div>
    </div>
  );
});

export default Card;
