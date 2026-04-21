import React from 'react'
import { useState } from 'react';
import "./Counter.css";

function Counter() {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count+1);
  }
  const decrement = () => {
    setcount(count-1);
  }
  const reset = () => {
    setcount(0);
  }
  return (
    <div className="divvv">
      <h1>COUNT</h1>
      <h1>{count}</h1>
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      </div>

      </div>
    
  )
}

export default Counter
