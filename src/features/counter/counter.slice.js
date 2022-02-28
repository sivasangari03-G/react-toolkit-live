import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./counter.constants"


const counterSlice = createSlice({
    name: "COUNTER",
    initialState,
    reducer: {
        increment(state) {
            state.count++;
        }
    }
})

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;