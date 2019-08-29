import React from "react";

import logo from "../../assets/img/icon-login.png";

import "../../assets/css/login.css";
import Axios from "axios";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      senha: "",
      erro: ""
    };
  }

  atualizaEstadoEmail(event) {
    this.setState({ email: event.target.value });
  }

  atualizaEstadoSenha(event) {
    this.setState({ senha: event.target.value });
  }

  efetuaLogin(event) {
    event.preventDefault();

    Axios.post("http://localhost:5000/api/login", {
      email: this.state.email,
      senha: this.state.senha
    })
      .then(data => {
        if (data.status === 200) {
          console.log(data.data.token);
          localStorage.setItem("usuario-gufos", data.data.token);
          this.props.history.push('/categorias');
        } else {
          console.log("erro");
        }
      })
      .catch(erro => {
        this.setState({ erro: "Usuário ou senha inválidos." });
        console.log(erro);
      });
  }

  render() {
    return (
      <section class="container flex">
        <div class="img__login">
          <div class="img__overlay" />
        </div>

        <div class="item__login">
          <div class="row">
            <div class="item">
              <img src={logo} />
            </div>
            <div class="item" id="item__title">
              <p class="text__login" id="item__description">
                Bem-vindo! Faça login para acessar sua conta.
              </p>
            </div>
            <form onSubmit={this.efetuaLogin.bind(this)}>
              <div class="item">
                <input
                  class="input__login"
                  placeholder="username"
                  type="text"
                  value={this.state.email}
                  name="username"
                  onChange={this.atualizaEstadoEmail.bind(this)}
                  id="login__email"
                />
              </div>
              <div class="item">
                <input
                  value={this.state.senha}
                  onChange={this.atualizaEstadoSenha.bind(this)}
                  class="input__login"
                  placeholder="password"
                  type="password"
                  name="password"
                  id="login__password"
                />
              </div>
              <p
                className="text__login"
                style={{ color: "red", textAlign: "center" }}
              >
                {this.state.erro}
              </p>
              <div class="item">
                <button class="btn btn__login" id="btn__login">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
