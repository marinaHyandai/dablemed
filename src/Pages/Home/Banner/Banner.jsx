import "@fontsource/josefin-sans";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import womanbrush from "../../../Images/global-icon.png";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
      <Container>
        <Row className="align-items-center">
          <Col md={12} sm={12} lg={6}>
            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
              <h2>Заботимся о вашей улыбке</h2>
              <h1>Ваша лучшая стоматология!</h1>
              <p className="mb-xs-4">
                Наше непоколебимое обязательство — обеспечить лучший уход,
                относясь к каждому пациенту так, как если бы он был членом нашей
                семьи.
              </p>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} className="mt-sm-5">
            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
              <img src={womanbrush} alt="" className="heroTeeth" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
