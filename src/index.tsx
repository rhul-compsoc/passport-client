import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./redux/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import "materialize-css/sass/materialize.scss";
import "material-icons/iconfont/material-icons.scss";
import "materialize-css";
import "./scss/styles.scss";
import { HashRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("app")
);

module.hot?.accept();
