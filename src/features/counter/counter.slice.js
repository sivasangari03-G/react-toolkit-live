import { createSlice } from "@reduxjs/toolkit";
import { addTodosAPI } from "../todos/todo.api";
import { initialState } from "./counter.constants"


const counterSlice = createSlice({
    name: "COUNTER",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
    },
    extraReducers(builder) {
        builder.addCase(addTodosAPI.fulfilled, (state) => {
            state.count = 0;
        })
    }
})

export const { increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;