import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo-image.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="head-bg">
      <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container className="container-head">
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" style={{ height: 70 }} />
            <span style={{ color: "#03346f", fontSize: 30 }}>Дабл</span>
            <span style={{ color: "#fff", fontSize: 30 }}>Мeд</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Link to="/home" className="list-item text-decoration-none">
                Главная
              </Link>
              <Link to="/about" className="list-item text-decoration-none">
                О нас
              </Link>
              <Link to="/service" className="list-item text-decoration-none">
                Услуги
              </Link>
              <Link to="/dentist" className="list-item text-decoration-none">
                Прайс лист
              </Link>
              <Link to="/contact" className="list-item text-decoration-none">
                Контакты
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
