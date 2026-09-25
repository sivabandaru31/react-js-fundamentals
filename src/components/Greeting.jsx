//Creating Class components
import React from "react";
class Greeting extends React.Component{
    render(){
        return <h1>Hello Microsoft,{this.props.name}</h1>
    }
}
export default Greeting