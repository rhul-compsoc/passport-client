import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import {Provider} from "../web_modules/react-redux.js";
import {App as App2} from "./App.js";
import {applyMiddleware, createStore} from "../web_modules/redux.js";
import {rootReducer} from "./redux/reducers/index.js";
import thunk from "../web_modules/redux-thunk.js";
import {composeWithDevTools} from "../web_modules/redux-devtools-extension.js";
import "../web_modules/materialize-css/dist/css/materialize.min.css.proxy.js";
import "../web_modules/material-icons/iconfont/material-icons.css.proxy.js";
import "../web_modules/materialize-css.js";
import "./scss/styles.css.proxy.js";
import {HashRouter} from "../web_modules/react-router-dom.js";
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(/* @__PURE__ */ React.createElement(Provider, {
  store
}, /* @__PURE__ */ React.createElement(HashRouter, null, /* @__PURE__ */ React.createElement(App2, null))), document.getElementById("app"));
import.meta.hot?.accept();
