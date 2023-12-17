import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Content.css";

const Content = () => {
  const fileUrl = process.env.PUBLIC_URL + "/files/Публичный_договор.pdf";
  const fileUrls =
    process.env.PUBLIC_URL + "/files/Положение_о_гарантии.pdf";

  return (
    <section className="about-content-sec">
      <Container>
        <Row>
          <Col md={12} lg={{ order: 2 }} className="text-center">
            <div className="section-title">
              <h1>О клинике</h1>
            </div>
            <p className="w-50 m-auto content-inner">
              ДаблМед - это стоматологическая клиника, основанная
              доктором-ортодонтом с 15-летнем опытом работы и желанием
              постоянного профессионального развития. Мы специализируемся на
              комплексных стоматологических услугах, уделяя особое внимание
              ортодонтии. Наше непоколебимое обязательство — обеспечить лучший
              уход, относясь к каждому пациенту так, как если бы он был членом
              нашей семьи. Качество и профессионализм – наши отличительные
              черты. Мы твердо верим, что инвестиции в стоматологическую помощь
              высшего уровня — это инвестиции в ваше здоровье и уверенность.
              Наша клиника оснащена новейшими технологиями, оборудованием и
              современными материалами.
            </p>
            <div>
              <a href={fileUrl} target="_blank" rel="noopener noreferrer">
                Публичный_договор
              </a>
            </div>
            <div>
              <a href={fileUrls} target="_blank" rel="noopener noreferrer">
                Положение о гарантии
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
