import React from "react";

class Titulo extends React.Component {
  render() {
    return (
      <h1 className="conteudoPrincipal-cadastro-titulo">{this.props.titulo}</h1>
    );
  }
}
export default Titulo;
