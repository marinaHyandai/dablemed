import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import expertDentist from "../../../Images/med_47.jpg";
import "./Dentist.css";

const Dentist = () => {
  return (
    <section className="expert-dentist">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src={expertDentist}
              alt="expertDentist"
              className="img-fluid"
              style={{ height: 500 }}
            />
          </Col>
          <Col lg={6}>
            <div className="expertDentist-txt mt-5 mt-lg-0">
              <h2>Опытный стоматолог</h2>
              <p>
                Марина – талантливый стоматолог с блестящим образованием,
                окончившая ВГМУ. Ее преданность к пациентам проявляется в
                искусстве косметической стоматологии, где она с легкостью
                преображает улыбки, придавая им не только здоровье, но и
                эстетическую красоту.
              </p>
              <p>
                Ее заботливый и индивидуальный подход пациентам создает уютную
                атмосферу в кабинете.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dentist;
