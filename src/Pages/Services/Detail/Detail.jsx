import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceDetailImg from "../../../Images/service.png";
import "./Detail.css";

const Detail = () => {
  return (
    <>
      <section className="healing">
        <Container>
          <Row className="align-items-center p-5">
            <Col lg={6} sm={12} xs={12}>
              <div className="section-title">
                <h1>Услуги</h1>
              </div>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <p>
                  Мы предлагаем нашим клиентам все виды эстетической
                  стоматологии. Как только появляются новые технологии - мы их
                  внедряем и предлагаем нашим пациентам.
                </p>
              </div>
              <div className="dentist-award">
                <ul className="p-0">
                  <li>Ортодонтические услуги (брекеты, элайнеры)</li>
                  <li>Лечение кариеса, лечение пульпита и периодонтита</li>
                  <li>Эстетическая реставрация</li>
                  <li>Подготовка под протезирование</li>
                  <li>Профессиональная гигиена</li>
                  <li>и другие</li>
                </ul>
              </div>
            </Col>
            <Col lg={6} sm={12} xs={12}>
              <img
                src={serviceDetailImg}
                alt="expertDentist"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detail;
