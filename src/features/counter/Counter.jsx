import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
    const count = useSelector(state => state.counter.count);
  return (
    <div>Counter: {count}</div>
  )
}
