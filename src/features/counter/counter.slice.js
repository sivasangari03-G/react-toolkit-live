import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./counter.constants"


const counterSlice = createSlice({
    name: "COUNTER",
    initialState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count++
        }
    }
})

export const { increment,decrement } = counterSlice.actions;

export default counterSlice.reducer;