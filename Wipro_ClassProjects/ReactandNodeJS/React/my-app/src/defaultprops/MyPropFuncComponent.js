
import React from "react";

const MyPropFuncComponent =({name="Stranger",age=25})=>{
    return(
        <div>
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
        </div>
    )
}

//Destructing props
const MyPropFuncComponentWithDestructure =(props)=>{
    const {name="Guest",age=25}=props;
    return(
        <div>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        </div>
    )
};
    


// const MyPropFuncComponentWithDefaultProps =({name,age})=>{
//     return(
//         <div>
//             <h4>Name: {name}</h4>
//             <h4>Age: {age}</h4>
//         </div>
//     )
// }
// MyPropFuncComponentWithDefaultProps.defaultProps={
//     name:'Stranger',
//     age:25
// }

//export default MyPropFuncComponent;
export default MyPropFuncComponentWithDestructure