import __SNOWPACK_ENV__ from '../../../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React, {Component} from "../../../web_modules/react.js";
import {Icon, Navbar, NavItem} from "../../../web_modules/react-materialize.js";
import {connect} from "../../../web_modules/react-redux.js";
import {Link, NavLink} from "../../../web_modules/react-router-dom.js";
import {getUserDetails, removeUserDetails} from "../../redux/thunks/auth.js";
import compsoc2 from "./compsoc.svg.proxy.js";
const mapState = (state) => ({
  auth: state.auth
});
const connector = connect(mapState);
class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUserDetails());
  }
  login() {
    window.location.href = import.meta.env.SNOWPACK_PUBLIC_API_URL + "/login/discord?return=" + encodeURIComponent(window.location.href);
  }
  logout() {
    const {dispatch} = this.props;
    dispatch(removeUserDetails());
  }
  render() {
    return /* @__PURE__ */ React.createElement(Navbar, {
      alignLinks: "right",
      menuIcon: /* @__PURE__ */ React.createElement(Icon, null, "menu"),
      centerChildren: true,
      brand: /* @__PURE__ */ React.createElement(Link, {
        className: "brand-logo",
        to: "/"
      }, /* @__PURE__ */ React.createElement("img", {
        alt: "Computing Society Logo",
        style: {height: "24px"},
        src: compsoc2
      }))
    }, this.props.auth.user && /* @__PURE__ */ React.createElement(NavItem, {
      onClick: this.logout
    }, "Log Out"), this.props.auth.user && /* @__PURE__ */ React.createElement(NavLink, {
      to: "/guild/500612695570120704"
    }, "Statistics"), !this.props.auth.user && /* @__PURE__ */ React.createElement(NavItem, {
      onClick: this.login
    }, "Login"));
  }
}
const ConnectedComponent = connector(Header);
export {ConnectedComponent as Header};
