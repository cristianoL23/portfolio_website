import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col >
            Lucia Cristiano
          </Col>
          <Col className="p-0 d-flex justify-content-end">
            This site was made by Lucia Cristiano.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
