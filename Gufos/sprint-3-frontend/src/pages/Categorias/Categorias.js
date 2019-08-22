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

class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      lista: [],
      nome: ""
      //   [
      //     { idCategoria: 1, nome: "Design" },
      //     { idCategoria: 2, nome: "Jogos" },
      //     { idCategoria: 3, nome: "Meetup" }
      //   ]
    };

    this.cadastrarCategoria = this.cadastrarCategoria.bind(this);
  }

  cadastrarCategoria(event) {
    event.preventDefault();
    fetch("http://localhost:5000/api/categorias", {
      method: "POST",
      body: JSON.stringify({ nome: this.state.nome }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(this.listarCategorias())
      .catch(error => console.log(error));
  }

  atualizaNome(event) {
    this.setState({ nome: event.target.value });
  }

  listarCategorias() {
    fetch("http://localhost:5000/api/categorias")
      .then(response => response.json())
      .then(data => this.setState({ lista: data }));
  }

  componentDidMount() {
    this.listarCategorias();
  }

  render() {
    return (
      <div>
        <header className="cabecalhoPrincipal">
          <div className="container">
            <img src={logo} />
          </div>
        </header>

        <main className="conteudoPrincipal">
          <section className="conteudoPrincipal-cadastro">
            {/* <h1 className="conteudoPrincipal-cadastro-titulo">Categorias</h1> */}
            <Titulo titulo="Categorias" />
            <div className="container" id="conteudoPrincipal-lista">
              <table id="tabela-lista">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Título</th>
                  </tr>
                </thead>

                <tbody id="tabela-lista-corpo">
                  {this.state.lista.map(function(categoria) {
                    return (
                      <tr key={categoria.idCategoria}>
                        <td>{categoria.idCategoria}</td>
                        <td>{categoria.nome}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="container" id="conteudoPrincipal-cadastro">
              <h2 className="conteudoPrincipal-cadastro-titulo">
                Cadastrar Categoria
              </h2>
              <form onSubmit={this.cadastrarCategoria}>
                <div className="container">
                  <input
                    type="text"
                    value={this.state.nome}
                    onChange={this.atualizaNome.bind(this)}
                    className="className__categoria"
                    id="input__categoria"
                    placeholder="tipo do evento"
                  />
                  <button
                    id="btn__cadastrar"
                    className="conteudoPrincipal-btn conteudoPrincipal-btn-cadastro"
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>

        <Rodape />

        {/* <footer className="rodapePrincipal">
          <section className="rodapePrincipal-patrocinadores">
            <div className="container">
              <p>Escola SENAI de Informática - 2019</p>
            </div>
          </section>
        </footer> */}
      </div>
    );
  }
}

export default Categorias;
