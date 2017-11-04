import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './Resultado.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      resultados:[]
    }
    this.buscar=this.buscar.bind(this);
  }

  buscar(articulo){
    fetch('https://api.mercadolibre.com/sites/MCO/search?q='+articulo.target.value)
    .then(function(resultado){
      return resultado.json()
    }).then((json)=>{
      this.setState({resultados:json.results})
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Resultado</p>
          <input type="text" placeHolder="Texto" onChange={this.buscar.bind(this)} onFocus={this.value=""}/>
          {
            this.state.resultados
            .map(function(resultado){
              return <Resultado resultado={resultado}>
              </Resultado>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
