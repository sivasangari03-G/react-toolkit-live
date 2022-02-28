import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { addTodo } from "./todos.slice";

export const getTodosAPI = createAsyncThunk("todos/getTodo", async () => {
	const response = await axios.get("http://localhost:8000/todos");
	return response.data;
});

export const addTodosAPI = createAsyncThunk(
	"todos/postTodo",
	async (value) => {
		const response = await axios.post("http://localhost:8000/todos", {
			value: value,
		});
		return response.data;
	}
);
