import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./features/counter/counter.slice"
import todosReducer from "./features/todos/todos.slice";


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todos: todosReducer,
    }
})