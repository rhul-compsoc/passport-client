import React, { Component } from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import { connect, ConnectedProps, DispatchProp } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../redux/reducers";
import { getUserDetails, removeUserDetails } from "../../redux/thunks/auth";
import compsoc from "url:./compsoc.svg";

const mapState = (state: RootState) => ({
  auth: state.auth,
});
const connector = connect(mapState);
type Props = DispatchProp<any> & ConnectedProps<typeof connector>;

class Header extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.logout = this.logout.bind(this);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getUserDetails());
  }
  login() {
    window.location.href =
      process.env.API_URL +
      "/login/discord?return=" +
      encodeURIComponent(window.location.href);
  }
  logout() {
    const { dispatch } = this.props;
    dispatch(removeUserDetails());
  }
  render() {
    return (
      <Navbar
        alignLinks="right"
        menuIcon={<Icon>menu</Icon>}
        centerChildren
        brand={
          <Link className="brand-logo" to="/">
            <img
              alt="Computing Society Logo"
              style={{ height: "24px" }}
              src={compsoc}
            />
          </Link>
        }
      >
        {this.props.auth.user && (
          <NavItem onClick={this.logout}>Log Out</NavItem>
        )}
        {this.props.auth.user && (
          <NavLink to="/guild/500612695570120704">Statistics</NavLink>
        )}
        {!this.props.auth.user && <NavItem onClick={this.login}>Login</NavItem>}
      </Navbar>
    );
  }
}

const ConnectedComponent = connector(Header);
export { ConnectedComponent as Header };
