import React, { Component } from "react";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello world!</h1>
        <p>Welcome to a world of hurt.</p>
      </div>
    )
  }
}

export { App }
