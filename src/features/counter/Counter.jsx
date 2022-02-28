import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter.slice";

export const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()
	return (
		<div>
			<div>Counter: {count}</div>
			<button onClick={() => dispatch(increment())}>Increment</button>
			<button onClick={() => dispatch(decrement())}>Decrement</button>
		</div>
	);
};
