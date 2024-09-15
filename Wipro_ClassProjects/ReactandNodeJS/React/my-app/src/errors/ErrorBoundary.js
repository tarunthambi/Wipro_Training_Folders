//ErrorBoundary
import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={hasError:false};
    }

    static getDerivedStateFromError(error){
        //Update state so the next render shows the fallback UI
        return {hasError:true}
    }

    componentDidCatch(error,info){
        //Log the errors
        console.error("Error caught in ErrorBoundary: ",error,info);
    }

    render() {
    
           if(this.state.hasError){
            //render any custom fallback UI
            return <h2>Something went wrong</h2>
           }
           return this.props.children;
        
    }
    
}

export default ErrorBoundary;