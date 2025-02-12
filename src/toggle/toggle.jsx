import { Component } from "react";

class Toggle extends Component{
    constructor(){
        super()
        this.state={
            name:"pavani",
            isvisible:true
        }
    }
    htoggle = () => {
    this.setState({isvisible: !this.state.isvisible})
   }
    render(){
        return(
        <>
        <h1>Toggle task:</h1>
        {/* <h3>{this.state.isvisible ? this.state.name : " "}</h3> */}
        <h3>{this.state.isvisible && this.state.name }</h3>
        <button onClick={this.htoggle}>{this.state.isvisible ? "Hide" : "show"}</button>
        </>
        )
    }
}
export default Toggle