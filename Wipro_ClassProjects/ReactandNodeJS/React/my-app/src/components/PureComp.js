import React, { PureComponent } from 'react';

//Class extends from PureComponent which automatically implements 'shouldComponentUpdate'
//with shallow comparisions of props and state
export default class PureComp extends PureComponent{
    render(){
        console.log('Rendering Pure Component');
        return <div>{this.props.message}</div>;
    }
}