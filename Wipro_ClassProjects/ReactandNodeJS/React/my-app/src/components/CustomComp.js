import React, { useState } from "react";
//Component with custom comparison function
const CustomComp=React.memo(
    ({message,list})=>{
        console.log("Custom Comparison Component Rendered");
        return(
            <div>
                <h5>{message}</h5>                
                {list.map((item,index)=>(
                    <li key={index}>{item}</li>
))}                            
                
            </div>
        );
    },
    (prevProps,nextProps)=>{
        //Custom Comparison function
        //Compare the message prop and the length of the list

        return(
            prevProps.message === nextProps.message &&
            prevProps.list.length === nextProps.list.length
        )
    }
)

export default function ParentComponent(){
    const [message,setMessage]=useState("Welcome User!");
    const [list,setList]=useState(['Item1','Item2','Item3']);
    const [count,setCount]=useState(0);

    const addItemToList=()=>{
        setList([...list,`Item ${list.length+1}`]);
    }

    return(
        <div>
            <h6>Count: {count}</h6>
            <button className="btn btn-info btn-sm" onClick={()=>setCount(count+1)}>Increment Counter</button>
            <br/><br/>            
            <button className="btn btn-success btn-sm" onClick={addItemToList}>Add Item to List</button>
            <br/><br/>
            <button className="btn btn-primary btn-sm" onClick={()=>setMessage('Hello! React')}>Change Message</button>
            <CustomComp message={message} list={list}/>
        </div>
    )
}