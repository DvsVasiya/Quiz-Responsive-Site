import { createSlice } from "@reduxjs/toolkit";


const REDUCER_NAME = "QuizMST";

const TYPES = {
    SELECTED_QUIZ_ID: "selectedQuizId",
    TOTAL_TIME: "totalTime",
    USER_SELECTED_QUESTION:"userSelectedQuestion",  
    TIME_FOR_EACH_QUE_IN_SEC:"timeForEachQuestionInSec",  
    DIFFICULTY:"Difficulty"
  };       

  interface StateItem {
    loading: boolean;
    error: string | null;
    data: any;
  }
  
  interface QuizState {
    [key: string]: StateItem;
    userSelectedQuestion?: any; 
  }

export const quizMSTReduxSlice = createSlice({
    name: REDUCER_NAME,
    initialState: {
        ...Object.values(TYPES).reduce((occ, cur) => {
            return { ...occ, [cur]: { loading: false, error: null, data: null } };
          }, {} as QuizState),
    },
    reducers:  {
        // dataRecieved: (state :any, action) => {
        //     state[action.payload.type].error = null;
        //     state[action.payload.type].loading = false;
        //     state[action.payload.type].data = action.payload.data;
        //   },
          setQuestion: (state, action) => {
            state.userSelectedQuestion.data = action.payload;
          },
          setTimeForEachQuestionInSec: (state, action) => {
            state.timeForEachQuestionInSec.data = action.payload * 60;
          },
          setTotalTime: (state, action) => {
            state.totalTime.data = action.payload;
          },
          setSelectedQuiz: (state, action) => {
            state.selectedQuizId.data = action.payload
          },
          setDifficulty: (state, action) => {
            state.Difficulty.data = action.payload
          }
    }
})


export const { setQuestion, setSelectedQuiz, setTimeForEachQuestionInSec, setTotalTime, setDifficulty } = quizMSTReduxSlice.actions;
export default quizMSTReduxSlice.reducer;
 