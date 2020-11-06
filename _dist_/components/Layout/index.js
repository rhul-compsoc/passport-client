import React from "../../../web_modules/react.js";
import {Footer as Footer2} from "../Footer/index.js";
import {Header as Header2} from "../Header/index.js";
const Layout = ({children}) => /* @__PURE__ */ React.createElement("div", {
  style: {minHeight: "100vh", display: "flex", flexDirection: "column"}
}, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement("main", {
  style: {flexGrow: 1}
}, children), /* @__PURE__ */ React.createElement(Footer2, null));
export {Layout};
