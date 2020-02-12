import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props) { 
//return <h2>{props.titulo}</h2>
//}

//const Hello = (props) => <h2>{props.titulo}</h2>
class Hello extends Component{
  render(){
    return <h2>{this.props.titulo}</h2>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello titulo="Hello from props"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
