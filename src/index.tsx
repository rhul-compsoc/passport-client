import "material-icons/iconfont/material-icons.scss";
import "materialize-css";
import "materialize-css/sass/materialize.scss";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const el = document.getElementById("root");

ReactDOM.render(
  <App />,
  el
);

module.hot?.accept();
