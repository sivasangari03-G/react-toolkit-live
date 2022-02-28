import React from "react";
import { useEffect } from "react";
import {useDispatch, useSelector } from "react-redux";
import { Todo } from "./Todo";
import { getTodosAPI } from "./todo.api";
import { TodoInput } from "./TodoInput";

export const Todos = () => {
	const { isLoading } = useSelector((state) => state.todos);
	const data = useSelector((state) => state.todos.data);
	console.log("data", data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTodosAPI())
	}, [])
	
	if (isLoading) return <h3>isLoading...</h3>;
	return (
		<div>
			<h1>Todos</h1>
			<TodoInput />
			<div>
				<h1>Todo List:</h1>
				{data.map((todo) => (
					<div key={todo.id}>
						{/* <div>{ todo.value}</div> */}
						<Todo todo={todo} />
					</div>
				))}
			</div>
		</div>
	);
};
