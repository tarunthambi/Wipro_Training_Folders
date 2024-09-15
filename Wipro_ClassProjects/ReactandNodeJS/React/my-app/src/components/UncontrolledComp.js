import React, { useRef } from 'react';

export default function UncontrolledComp(){
    //inputRef is a reference to the <input> element. created using useRef.
    const inputRef=useRef(null);

    //Event
    //The value of the input is not tied to the component's state. But it is directly
    //accessible via inputRef.current.value during form submission
    //The input value is managed by the browser and not by React
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(`You typed: ${inputRef.current.value}`)
        alert(`You typed: ${inputRef.current.value}`)
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>
                <b>Enter Text: </b>
                <input type="text" ref={inputRef}/>
            </label>
            <button type='submit'>Submit</button>
        </form>
    )
}