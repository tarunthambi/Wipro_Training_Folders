
//JSXComponent
import React from "react";

function Greeting(user){
    if(user){
        return <h2>Hello, {user.username}</h2>
    }
    else
    {
        return <h2>Hello, Stranger</h2>
    }
}

function List(){
    return(
        <React.Fragment>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </React.Fragment>
    )
}

function Lists(){
    return(
        <>
            <li>Item 11</li>
            <li>Item 12</li>
            <li>Item 13</li>
            <li>Item 14</li>
            <li>Item 15</li>
        </>
    )
}

export default function JSXComponent(){

    const name="John";
    const isLoggedIn=true;
    
    return(
        <div className="container">
        <h1>Hello, World;</h1>
        <p></p>        
        <div>
            <List/>
        </div>
        <div>
            <Lists/>
        </div>
        <div>
            <h1>Hello {name}</h1>
            {isLoggedIn ? <h3>Welcome back !</h3> : <h3>Please Sign up.</h3>}
        </div>
        
        </div>
       
    )
}
