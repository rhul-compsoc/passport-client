import { useQuery, gql } from "@apollo/client";
import React from "react";
import { Icon, Navbar, NavItem } from "react-materialize";
import { Link, NavLink } from "react-router-dom";

const USER_DETAILS = gql`
  query GetCurrentUserDetails {
    currentUser {
      username
      discrim
      memberId
    }
  }
`

const Header = () => {
  const { loading, data } = useQuery(USER_DETAILS, {
    variables: {
      guildId: process.env.DEFAULT_GUILD
    }
  })

  return (
    <Navbar
      alignLinks="right"
      centerChildren
      brand={
        <Link className="brand-logo" to="/">
          passport2
        </Link>
      }
      menuIcon={<Icon>menu</Icon>}
    >
      <NavItem href="#">Search</NavItem>
      {
        loading || !data || data.currentUser === null ?
        <NavItem href={`${process.env.API_URL}/login/redirect`}>Log in</NavItem> :
        [
          <NavItem key="1" href={`${process.env.API_URL}/login/logout`}>Log out of {data.currentUser.username}#{data.currentUser.discrim}</NavItem>,
          <NavLink key="2" to="/guild">Guilds</NavLink>
        ]
      }
    </Navbar>
  );
};

export { Header };
