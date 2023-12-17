import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white">
          <div className="single-footer-widget">
            <div className="widget-content">
              <div style={{ marginBottom: 20 }}>
                <span>
                  <FontAwesomeIcon icon={faHome} /> <span>г. Витебск</span>
                </span>
                <span style={{ margin: 40 }}>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <span>dablmed@yandex.by</span>
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <span>+375(33) 307-89-46</span>
                </span>
              </div>
            </div>

            <p className="mb-0">
              &copy; 2023 ООО «ДаблМед». Все права защищены. Общество с
              Ограниченной Ответственностью "ДаблМед" УНП 391929140 Лицензия
              Министерства Здравоохранения Республики Беларусь №32230000078807
              от 04.09.2023
            </p>
          </div>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Footer;
