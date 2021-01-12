import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import { Link, NavLink } from "react-router-dom";
import { getLoginLink } from "../../help/loginLink";
import compsoc from "./compsoc.svg";
import styles from "./index.module.scss";

const USER_DETAILS = gql`
  query GetCurrentUserDetails {
    currentUser {
      username
      discrim
      memberId
    }
  }
`;

const Header = () => {
  const { loading, data } = useQuery(USER_DETAILS, {
    variables: {
      guildId: process.env.DEFAULT_GUILD,
    },
  });

  return (
    <Navbar
      alignLinks="right"
      centerChildren
      brand={
        <Link className="brand-logo" to="/">
          <img src={compsoc} className={styles.logo} />
        </Link>
      }
      menuIcon={<Icon>menu</Icon>}
    >
      {loading || !data || data.currentUser === null ? (
        <NavItem
          href={getLoginLink()}
        >
          Log in
        </NavItem>
      ) : (
        [
          <NavItem
            key="1"
            href={`${
              process.env.API_URL
            }/login/logout?return=${encodeURIComponent(window.location.href)}`}
          >
            Log out of {data.currentUser.username}#{data.currentUser.discrim}
          </NavItem>,
          <NavLink key="2" to="/guild">
            Guilds
          </NavLink>,
        ]
      )}
    </Navbar>
  );
};

export { Header };
