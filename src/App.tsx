import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GuildPage } from "./pages/Guild";
import { GuildGamePage } from "./pages/GuildGame";
import { GuildListPage } from "./pages/GuildList";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        if (
          graphQLErrors.every(
            (error) => error?.extensions?.code !== "UNAUTHENTICATED"
          )
        ) {
          // TODO: Reactify this!
          graphQLErrors.forEach((error) => {
            const span = document.createElement("span");
            span.innerText = error.message;
            M.toast({ html: span.innerHTML, displayLength: 5000 });
          });
        }
      }
      if (networkError && !networkError.message.includes('400')) {
        const span = document.createElement("span");
        span.innerText = networkError.message;
        M.toast({ html: span.innerHTML, displayLength: 5000 });
      }
    }),
    new HttpLink({
      uri: process.env.API_URL + "/graphql",
      credentials: "include",
    }),
  ]),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <Layout>
          <Helmet
            titleTemplate="%s :: Computing Society Passport"
            defaultTitle="Computing Society Passport"
          />
          <Switch>
            <Route exact path="/" component={GuildListPage} />
            <Route exact path="/guild/:guildId" component={GuildPage} />
            <Route
              exact
              path="/guild/:guildId/game/:memberId"
              component={GuildGamePage}
            />
          </Switch>
        </Layout>
      </HashRouter>
    </ApolloProvider>
  );
};

export { App };
