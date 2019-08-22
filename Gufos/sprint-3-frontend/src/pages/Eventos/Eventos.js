import React, { Component } from "react";

// realizar os imports dos estilos
import "../../assets/css/flexbox.css";
import "../../assets/css/reset.css";
import "../../assets/css/style.css";

// import do ícone
import logo from "../../assets/img/icon-login.png";

// importar Rodape
import Rodape from "../../componentes/Rodape";
import Titulo from "../../componentes/Titulo";

import Axios from "axios";

class Eventos extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/api/eventos")
      .then(data => this.setState({ lista: data.data }))
      .catch(erro => {
        console.log(erro);
      });
  }

  render() {
    return (
      <div>
        <header classNameName="cabecalhoPrincipal">
          <div classNameName="container">
            <img src={logo} />
          </div>
        </header>

        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            {/* <h1 className="conteudoPrincipal-cadastro-titulo">Eventos</h1> */}
            <Titulo titulo="Eventos" />
            <div className="container" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Evento</th>
                    <th>Data</th>
                    <th>Ativo</th>
                    <th>Tipo do Evento</th>
                  </tr>
                </thead>

                <tbody id="tabela-lista-corpo">
                  {this.state.lista.map(evento => {
                    return (
                      <tr key={evento.idEvento}>
                        <td>{evento.idEvento}</td>
                        <td>{evento.titulo}</td>
                        <td>{evento.dataEvento}</td>
                        <td>{evento.ativo ? "Sim" : "Não"}</td>
                        <td>{evento.idCategoriaNavigation.nome}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <Rodape />
      </div>
    );
  }
}

export default Eventos;
