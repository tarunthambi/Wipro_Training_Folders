import React, { useState } from "react";

//Accepts the onSendMessage prop (callback function from the parent)
function ChildComponent({onSendMessage}){
    const [input,setInput]=useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    const handleClick=()=>{
        //Call the callback function passed from parent and pass the input value
        onSendMessage(input);
    }

    return(
        <div>
            <input type="text" value={input} onChange={handleChange}/>
            <button className="btn btn-success btn-sm" onClick={handleClick}>Send Message</button>
        </div>
    )
}

export default ChildComponent;