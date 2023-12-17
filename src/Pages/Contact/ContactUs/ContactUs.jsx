import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const instagramUrl =
    "https://www.instagram.com/dablmed_mc?igshid=NzZlODBkYWE4Ng%3D%3D"; // Замените на ваш URL Instagram
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
                <p>г. Витебск, ул.Короткевича, 2</p>
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
                <p>
                  Instagram{" "}
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ height: 20 }}
                    />
                  </a>
                </p>
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
                <p>+375 (29) 700-33-44</p>
                <p>Пн-пт: 9.00-20.00</p> <p>Сб ,вс: 10.00-15.00</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
