import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './Resultado.js';
import Usuarios from './Usuarios.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      usuarios:[],
      show:''
    }
    this.buscarUsuarios=this.buscarUsuarios.bind(this);
  }

  buscar(articulo){
    fetch('https://api.mercadolibre.com/sites/MCO/search?q='+articulo.target.value)
    .then(function(resultado){
      return resultado.json()
    }).then((json)=>{
      this.setState({resultados:json.results})
    })
  }

  buscarUsuarios(codigo){
    let show = '';
    
    for(let usuario in Usuarios) {
      if (Usuarios[usuario].codigo == codigo.target.value){
        show="El usuario con código "+ Usuarios[usuario].codigo +" su nombre es "+ Usuarios[usuario].nombre;
        break;
      }else{
        show="Usuario no encontrado";
      }
    }
    
    this.setState({show: show})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p>Usuarios</p>
          <input type="text" placeHolder="Texto" onChange={this.buscarUsuarios} onFocus={this.value=""}/>
          <br></br>
          <br></br>
          {
            this.state.show
          }
        </div>
      </div>
    );
  }
}

export default App;
