import React, { Component } from "react";
import userstore from "./userstore";
import { updateuser } from "./updateuser";

class UserProfile extends Component{
    constructor(){
        super();
        this.state={
            user:userstore.getUser()
        };
        this._onChange=this._onChange.bind(this);
    }

    componentDidMount(){
        userstore.addChangeListener(this._onChange);
    }

    componentWillUnmount(){
        userstore.removeChangeListener(this._onChange);
    }
    _onChange(){
        this.setState({user:userstore.getUser()});        
    };


    handleUpdateUser=()=>{
        const newuser={name:'user2',age:30};
        console.log(newuser);
        updateuser(newuser); //Dispatch an action to update the user
    }

    render(){
        const {user} = this.state;
        return(
            <div>
                <h3>User Profile</h3>
                <h5>Name: {user.name}</h5>
                <h6>Age: {user.age}</h6>
                <button onClick={this.handleUpdateUser}>Update user</button>
            </div>
        )
    }
}

export default UserProfile;
