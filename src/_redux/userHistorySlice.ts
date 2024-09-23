import { createSlice } from "@reduxjs/toolkit";

const REDUCER_NAME = "userHistory";

const userHistorySlice = createSlice({
    name: REDUCER_NAME,
    initialState: {
        history: []
    },
    reducers: {
        addToHistory: (state, action) => {
            state.history.push(action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
        },
    },
});

export const { addToHistory, clearHistory } = userHistorySlice.actions;
export default userHistorySlice.reducer;
