//Default Props
import React, { Component } from 'react';

class MyPropComponent extends Component{
    static defaultProps={
        name:'Guest',
        age:25,
    };

    render(){
        const {name,age}=this.props;
        return(
            <div>
                <p style={{color:'blue'}}>Name: {name}</p>
                <p style={{color:'blue'}}>Age: {age}</p>
            </div>
        )
    }
}
export default MyPropComponent;