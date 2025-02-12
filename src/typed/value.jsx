import { Component } from "react";


class Value extends Component{
    constructor(){
        super()
        this.state={
            showtext:"mahi"


        }
    }
    inputchange =(e)=>{
        this.setState({
            showtext:e.target.value
            
        })
    }
    
    render(){
        return(
            <>
            <h1> typed value:{this.state.showtext}</h1>
           
            <input type="text" placeholder="type something" onChange={this.inputchange}></input>
            </>
        )
    }
}
export default Value