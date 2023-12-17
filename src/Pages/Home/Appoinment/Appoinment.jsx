import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Appoinment.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Appoinment = () => {
  const defaultState = {
    center: [55.196191, 30.184245], // Координаты улицы Короткевича, 2 в Витебске
    zoom: 17,
  };

  return (
    <section className="appoinment-wrapper">
      <Container>
        <Row>
          <Col sm={12} md={12}>
            <div className="section-title">
              <h1 className="mt-5">Мы находимся</h1>
            </div>
            <YMaps>
              <Map
                style={{ width: "100%", height: 400 }}
                defaultState={defaultState}
              >
                <Placemark geometry={[55.196191, 30.184245]} />
              </Map>
            </YMaps>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Appoinment;
