import { Component } from "react";
import Contact from "./Contact";
import TableData from "./TableData";
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state={
      contact:[]

    }

    addcontact(person) {
      this.setState({contact:[...this.state.contact,person]})
    }
    

  render(){
    //console.log(this.state);
  return (
    <div className="App">
      <header className="App-header">
      <Contact addcontact={this.addcontact.bind(this)} />
      <TableData contact={this.state.contact}/>
      </header>

    </div>
  );
}
}
export default App;