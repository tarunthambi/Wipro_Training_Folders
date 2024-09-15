import React, { useState } from "react";

function ControlledComp(){
    //inputValue state holds the current value of the input fields
    const [inputValue,setInputValue]=useState('');

    //Event - handleChange function updates the state whenever user types into the text field
    const handleChange=(event)=>{
        try{
        setInputValue(event.target.value);
        }
        catch(error){
            console.error("Error occures in the event handler: ",error);
        }
    };

    //The 'value' prop of the <input> element is tied to the inputValue state, making it a controlled component

    return(
        <div>
            <label><b>Enter Text:  </b></label>
            <input type="text" value={inputValue} onChange={handleChange}/>
            <p style={{"textAlign":'center'}}>{inputValue}</p>
        </div>
    )
}

export default ControlledComp;