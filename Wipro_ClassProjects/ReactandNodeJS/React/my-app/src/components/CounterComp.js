import React, { useState } from "react";

export default function CounterComp(){
    //Declare a state variable 'count' and a function 'setCount' to update the count

    //State Management
    const [count,setCount]=useState(0); //hook to manage the count, when the event fires

    //Virtual DOM
    //1. When the state changes ( from 0 to 1 ), React create a new VDOM that reflects the chnage
    //2. React con=mpares this new virtual tree with the previous one to determine what has changed
    //   Change is in the <h2> tag of count variable
    //3. Finally, React update the real DOM with the minimum number of changes needed.
    //4. Re-rendering: React re-renders the component whenever the state changes. Because of VDOM
    // update is efficient.


    //Functions
    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    };

    return(
        <div>
            <h3>Counter: {count}</h3>
            <button className="btn btn-success btn-sm" onClick={increment}>Increment Counter</button> |
            <button className="btn btn-danger btn-sm" onClick={decrement}>Decrement Counter</button>
        </div>
    )
}