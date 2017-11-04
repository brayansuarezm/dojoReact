import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      texto: "",
      texto2: ""
    }
    this.actualizarTexto=this.actualizarTexto.bind(this);
    this.actualizarTexto2=this.actualizarTexto2.bind(this);
  }

  actualizarTexto(arg){
    this.setState({texto: arg.target.value});
  }

  actualizarTexto2(arg){
    this.setState({texto2: arg.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <input type="text" placeHolder="Texto" onChange={this.actualizarTexto} onFocus={this.value=""}/>
          <input type="text" placeHolder="Texto" onChange={this.actualizarTexto2} onFocus={this.value=""}/>
          <p>
            {this.state.texto}
            {this.state.texto2}
          </p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
