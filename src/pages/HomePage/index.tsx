import React from "react";
import { Button, Container } from "react-materialize";
import { Link } from "react-router-dom";

const HomePage = () => (
  <Container>
    <h1>Welcome to the Computing Society Passport</h1>
    <Link to="/guild/500612695570120704">
      <Button>Discord Server Statistics</Button>
    </Link>
  </Container>
);

export { HomePage };
