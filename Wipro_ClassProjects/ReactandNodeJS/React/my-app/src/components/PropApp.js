// PropApp Component

import React from "react";
import PropTypes from 'prop-types';

//Reusbale Function Component with prop which accepts a username prop.
function Greeting(props){
    return <h1> Hello,{props.username}!</h1>;
}

//Prop with Class
// export default class WelcomeMessage extends React.Component{
//     render(){
//         return <h1> Hello,{this.props.username}!</h1>;
//     }
// }

//Default Prop - if label is not passed as a prop, it will be default "Click Here"
// export default function Button ({label='Click Here'}){
//     return <button>{label}</button>
// }

// export default function PropApp(){
//     return(
//         <div>
//             <Greeting username="User1"/>
//             <Greeting username="User2"/>
//         </div>
//     )
// }

//PropTypes
export default function UserProfiles({name,age}){
    return(
        <div>
            <p>{name} : {age}</p>
        </div>
    )
}

UserProfiles.propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
}
