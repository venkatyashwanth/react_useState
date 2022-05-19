import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }

    const decrement = () =>{
        setCount(count-1);
    }
    return (
        <>
            <h2>Counter Application: Using react hooks</h2>
            <p>The counter value is {count}</p>
            <input type="button" value="Increment" onClick={increment} />
            <input type="button" value="Decrement" onClick={decrement} />
        </>
    )
}
