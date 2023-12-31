import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner-all text-white">
      <Container>
        <Row className="align-items-center">
          <Col md={6} lg={6} sm={12}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
