import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodosAPI } from "./todo.api";
export const TodoInput = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState("");
	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
			/>
			<button
				onClick={() => {
					dispatch(addTodosAPI(value));
                    setValue("");
				}}
			>
				ADD
			</button>
		</div>
	);
};
