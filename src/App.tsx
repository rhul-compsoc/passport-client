import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { GuildPage } from "./pages/GuildPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Helmet } from "react-helmet";
import { AccountPage } from "./pages/AccountPage";

class App extends Component {
  render() {
    return (
      <Layout>
        <Helmet
          titleTemplate="%s :: Computing Society Passport"
          defaultTitle="Computing Society Passport"
        />
        <Switch>
          <Route exact path="/guild/:guild" component={GuildPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export { App };
