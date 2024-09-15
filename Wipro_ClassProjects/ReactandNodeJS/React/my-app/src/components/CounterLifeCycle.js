import React from 'react';

export default class CompLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={data:null};
        console.log('1. Constructor Component is Initialized');
    }

    static getDerivedStateFromProps(props,state){
        console.log("2. getDerivedStateFromProps: Syncing props to state");
        return null;
    }

    componentDidMount(){
        console.log("3. componentDidMount: Component is mounted");
        //Fetch the data from API or set the subscriptions
    }

    shouldComponentUpdate(prevProps,prevState){
        console.log("4.shouldComponentUpdate: Capturing Snapshot ");
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("5.componentDidUpdate: Component was re-rendered ");
        //Use the snapshot value, if any, for post-update operation
    }

    componentWillUnmount(){
        console.log("6. componentWillUnmount: Cleaning up before unmounting");
        //clean up subscriptions, or timers
    }
    render(){
        console.log("Render: Rendering the component");
        return <div>{this.state.data}</div>
    }
}

