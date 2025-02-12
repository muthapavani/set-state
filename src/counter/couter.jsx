import { Component } from "react"


class Counter extends Component{
    constructor(){
        super()
        this.state ={
            count:0
        }
    }
    increment=()=>{
        this.setState({count:this.state.count+1})
    }
    reset=()=>{
        this.setState({count:0})
    }
    decrement=()=>{
        this.setState({count:this.state.count-1})
    }

    render(){
        return(<>
        <h1> Counter</h1>
        <h2>counter:{this.state.count}</h2>
        <button disabled ={this.state.count >=100} onClick={this.increment}>+</button>
        <button disabled ={this.state.count ==100} onClick={this.reset}>reset</button>
        <button disabled ={this.state.count <=0} onClick={this.decrement}>-</button>
        </>)
    }



}
export default Counter;