//Immutable Components
import React, { useState } from "react";

export default function ImmutableComp(){
    const [items,setItems]=useState([1,2,3]);

    //Event Handler
    const addItem=()=>{

        //creata a new array instead of modifying the existing one
        setItems([...items,items.length+1]);
    }

    return(
        <div>
            {items.map((item)=>(
                <li key={item}>{item}</li>
            ))}
            <button onClick={addItem} className="btn btn-primary btn-sm">Add Item</button>
        </div>
    )
}