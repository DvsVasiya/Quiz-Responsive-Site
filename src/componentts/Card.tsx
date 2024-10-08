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
    setRandomQuestions,
    setSelectedQuiz,
    setStateLoading,
    setTotalTime,
  } from "../_redux/quizMSTRedux";
  import { useNavigate, useSearchParams } from "react-router-dom";
  import QuizData from "../data/quiz_data.json";
import LoadingOverlay from "./LoadingOverlay";

  const Card = React.memo(({ quiz }: any) => {
    const [userSlection, setuserSlection] = useState({
      totalTime: "",
      totalQuestion: 0,
      Difficulty: "",
    });

    const [errorMessage, setErrorMessage] = useState(""); 
    const [loading, setLoading] = useState(false); 

    const filterData = QuizData.filter((item) => {
      return item.tags === quiz.tags;
    })[0];


  

    const dispatch = useDispatch<AppDispatch>();
    // const userSelectedData = useSelector(
    //   (state: RootState) => state.QuizMST.userSelectedQuestion
    // );
    const navigate = useNavigate();

    const handleButtonClick = () => {
      setErrorMessage("");
      setLoading(true);

      if (!userSlection.totalTime || !userSlection.totalQuestion || !userSlection.Difficulty) {
        setErrorMessage("Please select total time, total questions, and difficulty.");
        setLoading(false);
        return; 
      } 

      console.log("Button clicked...");
      dispatch(setTotalTime(userSlection.totalTime));
      dispatch(setQuestion(userSlection.totalQuestion));
      dispatch(setDifficulty(userSlection.Difficulty));
      dispatch(setSelectedQuiz(quiz.id));
  


      console.log(filterData)

      const filteredDataQuestion = randomUniqueNum(
        filterData.allQuestion.length,
        userSlection.totalQuestion,
        filterData
      );


      const firstQuestion =  filteredDataQuestion?.[0]?.id

      setTimeout(() => {
        dispatch(setRandomQuestions(filteredDataQuestion));
        navigate(`/quiz/${quiz.tags}/${firstQuestion}`);
        setLoading(false); // End loading
      }, 3000);
      

      // dispatch(setRandomQuestions(filteredDataQuestion))
      // console.log(filteredDataQuestion);
    };

    return (
      <div className="p-[0.7rem] md:p-[1.3rem]  border-2 rounded-lg  flex flex-col">
         {loading && <LoadingOverlay />}
        <div>
          <Heading title={quiz.tags} label={`Test your ${quiz.tags} Knowelge`} />
          <CategorySelector
            Difficulty={["Easy", "Medium", "Hard"]}
            handleQuiz={setuserSlection}
          />
          <QuestionNumberSelector handleQuiz={setuserSlection} options={quiz.allQuestion} />
          <TimeLimit handleQuiz={setuserSlection} />
          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          <Button buttonClick={handleButtonClick} />
        </div>
      </div>
    );
  });

  export default Card;

  function randomUniqueNum(range: number, outputCount: number, filterData: object) {
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
