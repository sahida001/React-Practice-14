import React, { useState } from 'react'

export default function HOOKS_USESTATE2() {
   
   const [count, setcount] = useState(0)
   const handleDecrement = ()=>{
    setcount(count - 1);
   }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}
