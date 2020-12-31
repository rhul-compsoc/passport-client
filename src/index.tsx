import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import 'materialize-css/sass/materialize.scss';
import 'material-icons/iconfont/material-icons.scss';
import 'materialize-css';

const el = document.getElementById("root");

const client = new ApolloClient({
  uri: process.env.API_URL + '/graphql',
  cache: new InMemoryCache(),
  credentials: 'include'
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  el
);

module.hot?.accept();
