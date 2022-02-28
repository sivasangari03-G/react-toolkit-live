import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";
import { addTodosAPI, getTodosAPI } from "./todo.api";

const todosSlice = createSlice({
	name: "todos",
	initialState: {
		isLoading: false,
		error: false,
		data: [],
	},
	// reducers: {
	// 	addTodo(state, { payload }) {
	// 		state.data.push({
	// 			id: uuid(),
	// 			value: payload,
	// 		});
	// 	},
	// },
	extraReducers(builder) {
		builder
			.addCase(getTodosAPI.pending, (state) => {
				state.isLoading = true;
				state.error = false;
				state.data = [];
			})
			.addCase(getTodosAPI.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = false;
				state.data = action.payload;
			})
			.addCase(getTodosAPI.rejected, (state) => {
				state.isLoading = false;
				state.error = true;
				state.data = [];
			})
			.addCase(addTodosAPI.fulfilled, (state, {payload}) => {
				// console.log("payload", payload);
				state.isLoading = false;
				state.error = true;
				state.data.push(payload);
			});
	},
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
