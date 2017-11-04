import React, { Component } from 'react';
class Resultado extends Component {
	resultado={};
	constructor(props){
		super(props);
		this.resultado=props.resultado;
	}

	render(){
		return(
			<div className="Item">
			<table width="100%" border="1">
			<tr>
			<td width="150">
				<div className="Imagen" align="center"><img src={this.resultado.thumbnail}/></div>
			</td>
			<td>
			<div className="Titulo"><h4>Titulo</h4>{this.resultado.title}</div>
			<div className="Precio"><h4>Precio</h4>{this.resultado.price}</div>
			<div className="Link"><h4>Enlace</h4>{this.resultado.permalink}</div>
			</td>
			</tr>
			</table>
			</div>
		)
	}
}

export default Resultado;