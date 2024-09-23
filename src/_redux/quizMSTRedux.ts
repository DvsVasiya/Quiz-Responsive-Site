import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";


const REDUCER_NAME = "QuizMST";

const TYPES = {
    SELECTED_QUIZ_ID: "selectedQuizId",
    TOTAL_TIME: "totalTime",
    USER_SELECTED_QUESTION:"userSelectedQuestion",  
    TIME_FOR_EACH_QUE_IN_SEC:"timeForEachQuestionInSec",  
    DIFFICULTY:"Difficulty",
    RANDOM_QUESTIONS:"randomQuestions"
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

  let val = [
    {
        "id": 40,
        "category": "Web development",
        "type": "multiple choice",
        "tags": [
            "JavaScript"
        ],
        "questionText": "What will be the output of the following code snippet?",
        "options": [
            {
                "text": "0 1 2",
                "isCorrect": false
            },
            {
                "text": "0 Undefined Undefined",
                "isCorrect": false
            },
            {
                "text": "Undefined Undefined Undefined",
                "isCorrect": true
            },
            {
                "text": "None of the above",
                "isCorrect": false
            }
        ],
        "correctAnswers": [
            "Undefined Undefined Undefined"
        ],
        "explanation": "Since we are passing individual numbers rather than a single object to the function, Javascript will initialize the object parameters with their default value of undefined.",
        "codeAvailable": true,
        "codeContent": "const example = ({ a, b, c }) => {\n console.log(a, b, c);\n};\nexample(0, 1, 2);",
        "isAnswered": true,
        "userAnswer": "Undefined Undefined Undefined",
        "isCurrent": false,
        "isCorrect": true
    },
    {
        "id": 21,
        "category": "Web development",
        "type": "multiple choice",
        "tags": [
            "JavaScript"
        ],
        "questionText": "What will be the output of the following code snippet?",
        "options": [
            {
                "text": "true false",
                "isCorrect": true
            },
            {
                "text": "false true",
                "isCorrect": false
            },
            {
                "text": "true true",
                "isCorrect": false
            },
            {
                "text": "false false",
                "isCorrect": false
            }
        ],
        "correctAnswers": [
            "true false"
        ],
        "explanation": "In Javascript Math.max() is lesser than Math.min() because Math.max() returns -Infinity and Math.min() returns Infinity.",
        "codeAvailable": true,
        "codeContent": "var a = Math.max() < Math.min();\nvar b = Math.max() > Math.min();\nprint(a);\nprint(b);",
        "isAnswered": true,
        "userAnswer": "true true",
        "isCurrent": false,
        "isCorrect": false
    },
    {
        "id": 17,
        "category": "Web development",
        "type": "multiple choice",
        "tags": [
            "JavaScript"
        ],
        "questionText": "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        "options": [
            {
                "text": "Boolean",
                "isCorrect": false
            },
            {
                "text": "Undefined",
                "isCorrect": false
            },
            {
                "text": "Object",
                "isCorrect": true
            },
            {
                "text": "Integer",
                "isCorrect": false
            }
        ],
        "correctAnswers": [
            "Object"
        ],
        "explanation": "Any NULL value of operator will always return typeof object.",
        "codeAvailable": false,
        "isAnswered": true,
        "userAnswer": "Object",
        "isCurrent": false,
        "isCorrect": true
    }
]

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
            
            const convertToNumber = Number(action.payload)

            state.totalTime.data = action.payload;
            state.timeForEachQuestionInSec.data = convertToNumber * 60;
          },
          setSelectedQuiz: (state, action) => {
            state.selectedQuizId.data = action.payload
          },
          setDifficulty: (state, action) => {
            state.Difficulty.data = action.payload
          },
          setRandomQuestions: (state, action) => {
            const payload =  action.payload
            const addField =  payload.map((item: any) => {
              return{
                ...item,
                isAnswered: false,       
                userAnswer: null,          
                isCurrent: false,
                isCorrect:false,   
                timeTaken:null      
              }
            })
            state.randomQuestions.data = addField
          },
          setCurrentQuestion: (state, action) => {
            const unproxiedState = current(state);
            const getData = unproxiedState.randomQuestions.data;
            const payload = action.payload;

            debugger
            const updatedQuestions = getData.map((question) => {
              if (question.id === payload.id) {
                return { ...payload };
              }
              return { ...question }
          })


          
            state.randomQuestions.data = updatedQuestions;
          }
    }
})


export const { setQuestion, setSelectedQuiz, setTimeForEachQuestionInSec, setTotalTime, setDifficulty, setRandomQuestions, setCurrentQuestion } = quizMSTReduxSlice.actions;
export default quizMSTReduxSlice.reducer;
 