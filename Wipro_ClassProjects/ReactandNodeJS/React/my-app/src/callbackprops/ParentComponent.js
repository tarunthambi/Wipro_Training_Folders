import React, { useState } from 'react';
import ChildComponent from './ChildComponent';


function ParentComponent(){
    //state is message
    const [message,setMessage]=useState("");


    //Callback function to receive data from child - update the message state
    const handleMessage=(childData)=>{
        setMessage(childData);
    }

    //The callback function 'handleMessage' is passed to ChildComponent via the 
    //onSendMessage prop
    return(
        <div>
            <h5>Message from Child Component: {message}</h5>
            <ChildComponent onSendMessage={handleMessage}/>
        </div>
    )
}
export default ParentComponent;