import React from "react";

//ReactMemo is wrapped in React.Memo making it a pure component in the functional component
const ReactMemo=React.memo(({message})=>{
    console.log("Rendering ReactMemo Component");
    return <div>{message}</div>
})

export default ReactMemo;