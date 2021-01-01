import React from "react"
import { Col, Container, Row } from "react-materialize"

const Footer = () => (
  <footer className="page-footer">
    <Container>
      <Row>
        <Col className="l6 s12">
          <h5>Footer content</h5>
          <p>You cannot use rows and columns here</p>
        </Col>
        <Col className="l4 offset-l2 s12">
          <h5>Links</h5>
          <p>You cannot click links here</p>
        </Col>
      </Row>
    </Container>
    <div className="footer-copyright">
      <Container>
        © 2020 Computing Society at Royal Holloway, University of London
      </Container>
    </div>
  </footer>
)

export {
  Footer
}
