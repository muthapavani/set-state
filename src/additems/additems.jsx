import { Component } from "react";


class Add extends Component{
    constructor(){
        super()
        this.state={
            text:"",
            items:[]
        }


    }
    inputchange=(e)=>{
          this.setState({text:e.target.value})
    }
//     inputadd = () => {
//     this.setState({ items: [...this.state.items, this.state.text], text: "" });
// };
inputadd = () => {
    if (this.state.text.trim() === "") return; 

    let oldItems = this.state.items; 
    let newItems = []; 
    for (let i = 0; i < oldItems.length; i++) {
        newItems[i] = oldItems[i];
    }

    newItems[oldItems.length] = this.state.text;
    this.setState({ 
        items: newItems, 
        text: ""  
    });
};


    render(){
        return(
            <>
            <input type="text" placeholder="add items" onChange={this.inputchange}></input>
            <button onClick={this.inputadd}>add</button>
            <ul>
             {this.state.items.map((val, index) => (
                 <li key={index}>{val}</li>
              ))}
            </ul>

            </>
        )
    }
}
export default Add