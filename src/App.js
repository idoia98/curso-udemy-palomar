import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//function Hello (props) { 
//return <h2>{props.titulo}</h2>
//}

//const Hello = (props) => <h2>{props.titulo}</h2>
class Hello extends Component {
  render() {
    return <h2>{this.props.titulo}</h2>
  }
}

class Text extends Component {
  render() {
    const textoSegunBool = this.props.boolean ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)
    return <div>
      <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{textoSegunBool}</p>
      <p>{mappedNumbers.join(', ')}</p>
      <p>{this.props.objectWithInfo.key}</p>
    </div>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello titulo="Hello from props" />
        <Text
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{key:'First value', key2: 'otherValue'}}
          number={2}
          text="Texto en string"
          isActivate 
        />
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
