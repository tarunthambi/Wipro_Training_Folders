import React, { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={hasError:false,error:null};
    }

    static getDerivedStateFromError(error){
        //Update state so the next render shows the fallback UI
        return {hasError:true,error:error}
    }

    componentDidCatch(error,info){
        //Log the errors
        console.error("Error caught in ErrorBoundary: ",error,info);
    }

    render() {
    
           if(this.state.hasError){
            return(
            //render any custom fallback UI
            <div>
                <h2>Something went wrong</h2>
                <p>{this.state.error.toString()}</p>
            </div>
            )

           }
           return this.props.children;  
    }
}

export default ErrorBoundary;
