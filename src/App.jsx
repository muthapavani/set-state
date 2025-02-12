import { Component} from 'react'
import './App.css'
import Toggle from './toggle/toggle.jsx'
import Counter from './counter/couter.jsx'
import Value from './typed/value.jsx'
import Add from './additems/additems.jsx'

class App extends Component {
 render(){
  return (
    <>
    <Toggle></Toggle>
    <Counter/>
    <Value/>
    <Add/>
    </>
    )
}
}
export default App
