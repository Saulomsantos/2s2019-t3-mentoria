import React from "react";
import ReactDOM from "react-dom";
// navegação
import {
  Route,
  Link,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import "./index.css";
import App from "./pages/Home/App";
// incluir página
import Categorias from "./pages/Categorias/Categorias";
import Eventos from "./pages/Eventos/Eventos";

import Login from "./pages/Login/Login";

import NaoEncontrada from "./pages/Default/NaoEncontrada";

import * as serviceWorker from "./serviceWorker";

const RotaPrivada = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("usuario-gufos") !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/categorias" component={Categorias} /> */}
        <RotaPrivada path="/categorias" component={Categorias} />
        <RotaPrivada path="/eventos" component={Eventos} />
        <Route path="/login" component={Login} />
        <Route component={NaoEncontrada} />
      </Switch>
    </div>
  </Router>
);

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
