import { combineReducers } from "@reduxjs/toolkit"
import { quizMSTReduxSlice } from "./quizMSTRedux";
import userHistoryReducer from "./userHistorySlice";



const rootReducer = combineReducers({
    [quizMSTReduxSlice.name]:quizMSTReduxSlice.reducer,
    userHistory: userHistoryReducer,


})


export default rootReducer;
