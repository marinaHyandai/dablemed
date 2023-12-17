import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const instagramUrl =
    "https://www.instagram.com/dablmed_mc?igshid=NzZlODBkYWE4Ng%3D%3D"; // Замените на ваш URL Instagram

  const linkStyles = {
    textDecoration: "none", // Убираем подчеркивание
    color: "inherit", // Используем цвет, унаследованный от родительского элемента
  };

  return (
    <div className="footer-bg">
      <Container>
        <Row className="text-white">
          <div className="single-footer-widget">
            <div className="widget-content">
              <div style={{ marginBottom: 20 }}>
                <span>
                  <FontAwesomeIcon icon={faHome} />{" "}
                  <span>г. Витебск, ул.Короткевича, 2</span>
                </span>
                <span style={{ margin: 40 }}>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                  <span>dablmed@yandex.by</span>
                </span>
                <span>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                  <span>+375 (29) 700-33-44</span>
                </span>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyles}
                >
                  <span style={{ margin: 40 }}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ height: 20 }}
                    />
                  </span>
                </a>
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
