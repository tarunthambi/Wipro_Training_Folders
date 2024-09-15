import React from 'react';

class MouseTracker extends React.Component{
    constructor(props){
        super(props);
        this.state={x:0,y:0};
    }

    handleMouseEvent=(e)=>{
        this.setState({
            x:e.clientX,
            y:e.clientY
        });
    };

    render(){
        return(
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseEvent}>
                {
                    /*
                    Instead of providing a static representation of what MouseTracker renders,
                    use the render prop to dynamically determine what to render
                    */
                }
                {this.props.render(this.state)};
            </div>
        )
    }
}

//Use
function MouseApp(){
    return(
        <MouseTracker render={({x,y})=>(
            <h3>Mouse Position is: ({x},{y})</h3>
        )}/>
    );
}
export default MouseApp;
