import React from "react";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  return (
    <>
      <section className="dentist-details-sec">
        <Container>
          <Row>
            <Col md={7} lg={8}>
              <div className="section-title">
                <h1>ЦЕНЫ НА МЕДИЦИНСКИЕ УСЛУГИ</h1>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Имплантация зубов
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Двухэтапная дентальная имплантация
                      <span className="price__tabs__tab__content__price">
                        от: 850 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Одноэтапная дентальная имплантация
                      <span className="price__tabs__tab__content__price">
                        от: 1300 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Имплантация All-on-4
                      <span className="price__tabs__tab__content__price">
                        от: 10150 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Имплантация All-on-6
                      <span className="price__tabs__tab__content__price">
                        от: 12150 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Имплантация в Беларуси
                      <span className="price__tabs__tab__content__price">
                        от: 850 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Удаление зубов
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Простое удаление зубов
                      <span className="price__tabs__tab__content__price">
                        от: 60 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Атравматичное удаление зубов
                      <span className="price__tabs__tab__content__price">
                        от: 80 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление зубов мудрости
                      <span className="price__tabs__tab__content__price">
                        от: 150 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление ретенированных зубов
                      <span className="price__tabs__tab__content__price">
                        от: 200 руб
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление зубов ультразвуком
                      <span className="price__tabs__tab__content__price">
                        от: 300 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Хирургическая стоматология
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Синус-лифтинг
                      <span className="price__tabs__tab__content__price">
                        от: 1800 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Увеличение костной ткани
                      <span className="price__tabs__tab__content__price">
                        от: 400 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Рецессия десны
                      <span className="price__tabs__tab__content__price">
                        от: 400 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление кисты (цистэктомия)
                      <span className="price__tabs__tab__content__price">
                        от: 100 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Пластика уздечек языка, губ, альвеолярного отростка
                      <span className="price__tabs__tab__content__price">
                        от: 100 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Лечение зубов
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Диагностика
                      <span className="price__tabs__tab__content__price">
                        Бесплатно
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Обезболивание
                      <span className="price__tabs__tab__content__price">
                        от: 7 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Лечение кариеса
                      <span className="price__tabs__tab__content__price">
                        от: 80 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Эндодонтия (лечение корневых каналов)
                      <span className="price__tabs__tab__content__price">
                        от: 105 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Реставрационные работы
                      <span className="price__tabs__tab__content__price">
                        от: 130 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Лечение зубов под микроскопом
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Лечение одного корневого канала
                      <span className="price__tabs__tab__content__price">
                        от: 230 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Лечение двух корневых каналов
                      <span className="price__tabs__tab__content__price">
                        от: 430 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Лечение трех корневых каналов
                      <span className="price__tabs__tab__content__price">
                        от: 630 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Эстетическая стоматология
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Композиционные виниры
                      <span className="price__tabs__tab__content__price">
                        от: 230 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Компониры на зубы
                      <span className="price__tabs__tab__content__price">
                        от: 200 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Реставрация зубов
                      <span className="price__tabs__tab__content__price">
                        от: 170 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Отбеливание зубов
                      <span className="price__tabs__tab__content__price">
                        от: 75 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Скайс на зуб
                      <span className="price__tabs__tab__content__price">
                        от: 75 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Адгезивное протезирование
                      <span className="price__tabs__tab__content__price">
                        от: 500 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Несъемное протезирование
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Керамические виниры E-MAX
                      <span className="price__tabs__tab__content__price">
                        от: 1050 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Металлокерамика
                      <span className="price__tabs__tab__content__price">
                        от: 235 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Безметалловая керамика
                      <span className="price__tabs__tab__content__price">
                        от: 635 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Коронки на основе диоксида циркония
                      <span className="price__tabs__tab__content__price">
                        от: 550 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Пластмассовые коронки
                      <span className="price__tabs__tab__content__price">
                        от: 30 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Протезирование на имплантах (коронка из диоксида циркония
                      на имплантате, в том числе супраструктура и фиксация)
                      <span className="price__tabs__tab__content__price">
                        от: 950 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Съемное протезирование
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Бюгельный протез
                      <span className="price__tabs__tab__content__price">
                        от: 1200 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Нейлоновые зубные протезы
                      <span className="price__tabs__tab__content__price">
                        от: 490 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Пластмассовые протезы
                      <span className="price__tabs__tab__content__price">
                        от: 290 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Миорелаксирующие каппы
                      <span className="price__tabs__tab__content__price">
                        от: 140 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Микропротезирование
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Вкладки керамические
                      <span className="price__tabs__tab__content__price">
                        от: 635 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Накладки
                      <span className="price__tabs__tab__content__price">
                        от: 635 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Полукоронки
                      <span className="price__tabs__tab__content__price">
                        от: 635 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Керамические виниры E-MAX
                      <span className="price__tabs__tab__content__price">
                        от: 1050 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Чистка зубов
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Контроль гигиены полости рта
                      <span className="price__tabs__tab__content__price">
                        Бесплатно
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление зубного камня
                      <span className="price__tabs__tab__content__price">
                        от: 125 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Профессиональная гигиена полости рта
                      <span className="price__tabs__tab__content__price">
                        от: 125 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Обучение гигиене полости рта
                      <span className="price__tabs__tab__content__price">
                        от: 1050 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Удаление зубного налета Air Flow
                      <span className="price__tabs__tab__content__price">
                        от: 150 руб
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Шинирование 6-ти зубов
                      <span className="price__tabs__tab__content__price">
                        от: 425 руб.
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Детская стоматология
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Диагностика и лечение молочных и постоянных зубов
                      <span className="price__tabs__tab__content__price">
                        от: 65 руб
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Лечение зубов с несформированными корнями
                      <span className="price__tabs__tab__content__price">
                        от: 65 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Герметизация фиссур
                      <span className="price__tabs__tab__content__price">
                        от: 45 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Цветные пломбы Twinki Star
                      <span className="price__tabs__tab__content__price">
                        от: 60 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Реминерализирующая терапия
                      <span className="price__tabs__tab__content__price">
                        Бесплатно
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header
                    style={{
                      backgroundColor: "#03346f",
                      fontSize: "16px",
                      border: "1px solid #03346f",
                      cursor: "pointer",
                    }}
                    onClick={(e) => {
                      e.currentTarget.style.backgroundColor = "#ffff";
                      e.currentTarget.style.borderColor = "#03346f";
                      e.currentTarget.style.color = "#03346f";
                    }}
                  >
                    Цифровая рентгенография
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="price__tabs__tab__content__item">
                      Цифровая рентгенография
                      <span className="price__tabs__tab__content__price">
                        от: 7.68 руб.
                      </span>
                    </p>
                    <p className="price__tabs__tab__content__item">
                      Чтение и расшифровка снимков
                      <span className="price__tabs__tab__content__price">
                        Бесплатно
                      </span>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="achivement-img-bg"></div>
            </Col>
            <Col lg={6}>
              <div className="expertDentist-txt mt-5 mt-lg-0">
                <h2>Записаться на приём</h2>
                <div className="single-contact icon3">
                  <div className="c-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="c-info text-start">
                    <h4>Телефон</h4>
                    <p>+375(33) 307-89-46</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Details;
