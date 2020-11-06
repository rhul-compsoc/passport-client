import React, {Component} from "../web_modules/react.js";
import {Route, Switch} from "../web_modules/react-router-dom.js";
import {Layout as Layout2} from "./components/Layout/index.js";
import {GuildPage as GuildPage2} from "./pages/GuildPage/index.js";
import {HomePage as HomePage2} from "./pages/HomePage/index.js";
import {NotFoundPage as NotFoundPage2} from "./pages/NotFoundPage/index.js";
import {Helmet} from "../web_modules/react-helmet.js";
class App extends Component {
  render() {
    return /* @__PURE__ */ React.createElement(Layout2, null, /* @__PURE__ */ React.createElement(Helmet, {
      titleTemplate: "%s :: Computing Society Passport",
      defaultTitle: "Computing Society Passport"
    }), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/guild/:guild",
      component: GuildPage2
    }), /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/",
      component: HomePage2
    }), /* @__PURE__ */ React.createElement(Route, {
      path: "*",
      component: NotFoundPage2
    })));
  }
}
export {App};
