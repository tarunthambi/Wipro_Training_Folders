import React from 'react';
import Logger from './LoggingComponent';

//Component to display user information
function UserProfile({username,email}){
    return(
        <div>
            <h3>{username}</h3>
            <h5>{email}</h5>
        </div>
    )
}

//Wrap the UserProfile component with the Logger HOC
const UserProfileWithLog=Logger(UserProfile);

//Use the component
function UserApp(){
    const [user,setUser]=React.useState({username:'John S',email:'johns@testdomain.com'});

    React.useEffect(()=>{
        //Simulate a prop update after 3 seconds
        setTimeout(()=>{
            setUser({username:'John S',email:'johns@gmail.com'})
        },3000);
    },[]);

    return(
        <div>
            <UserProfileWithLog username={user.username} email={user.email}/>
        </div>
    )
}

export default UserApp;