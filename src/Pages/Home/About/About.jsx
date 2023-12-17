import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import donto from "../../../Images/handsome.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <section className="about-wrapper">
      <Container>
        <Row className="g-3">
          <Col md={12} lg={6}>
            <div className="about-left">
              <img src={donto} alt="donto" className="img-fluid donto" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className="about-right mt-5 mt-lg-0">
              <div className="about-content text-start" data-aos="zoom-in">
                <h1>Добро пожаловать в семью ДаблМед!</h1>
                <p>
                  Качество и профессионализм – наши отличительные черты. Мы
                  твердо верим, что инвестиции в стоматологическую помощь
                  высшего уровня — это инвестиции в ваше здоровье и уверенность.
                  Наша клиника оснащена новейшими технологиями, оборудованием и
                  современными материалами.
                </p>
                <a href="/about">О нас</a>
              </div>
              <div className="fun-fact-sec" data-aos="fade-right">
                <div className="single-fun">
                  <span>500</span>
                  <span>+</span>
                  <p>Счастливых пациентов</p>
                </div>
                <div className="single-fun sp-fun" data-aos="fade-right">
                  <span>15</span>
                  <span>+</span>
                  <p>Лет опыта</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
