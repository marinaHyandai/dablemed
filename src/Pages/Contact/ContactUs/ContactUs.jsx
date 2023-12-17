import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contactUs-wrapper">
      <Container>
        <Row>
          <div className="section-title">
            <h1>Контакты</h1>
          </div>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon1">
              <div className="c-icon">
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div className="c-info text-start">
                <h4>Адрес</h4>
                <p>г. Витебск</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon2">
              <div className="c-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="c-info text-start">
                <h4>Email</h4>
                <p>dablmed@yandex.by</p>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div className="single-contact icon3">
              <div className="c-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="c-info text-start">
                <h4>Телефон</h4>
                <p>+375(33) 307-89-46</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
