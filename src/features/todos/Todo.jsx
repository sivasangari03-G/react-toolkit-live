import React from 'react'
// import { useDispatch } from 'react-redux';
export const Todo = ({ todo }) => {
  // const dispatch = useDispatch();
  return (
      <div>
      <div key={todo.id}>{todo.value}</div>
      {/* <button onClick={() => dispatch()}>Delete</button> */}
    </div>
  )
}
