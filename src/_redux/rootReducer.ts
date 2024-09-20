import { combineReducers } from "@reduxjs/toolkit"
import { quizMSTReduxSlice } from "./quizMSTRedux";



const rootReducer = combineReducers({
    [quizMSTReduxSlice.name]:quizMSTReduxSlice.reducer,

})


export default rootReducer;
