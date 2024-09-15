import React from 'react';

//HOC that logs props on update
function Logger(WrappedComponent){
    return class extends React.Component{
        componentDidUpdate(prevProps){
            console.log('Previous Props: ',prevProps);
            console.log('Current Props:',this.props);
        }

        render(){
            //Pass all props to the wrapped component
            return<WrappedComponent{...this.props}/>
        }
    }
}
export default Logger;