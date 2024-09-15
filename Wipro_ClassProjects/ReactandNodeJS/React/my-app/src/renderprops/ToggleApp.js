import React from 'react';

class Toggle extends React.Component{
    state={on:false};

    toggle=()=>{
        this.setState({on: !this.state.on});        
    }

    render(){
        return this.props.render({
            on:this.state.on,
            toggle:this.toggle
        })
    }
}

//Use
function UseToggleApp(){
    return(
        <Toggle render={({on,toggle})=>(
            <div>
               
                <button onClick={toggle} className='btn btn-primary btn-sm'>
                    {on? "Switch Off":"Switch On"}
                </button>
                {on && <h6>The toggle is ON!</h6>}
            </div>
    )}/>
    )
}

export default UseToggleApp;
