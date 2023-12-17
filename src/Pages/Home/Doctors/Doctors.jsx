import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import "./Doctors.css";

const Doctors = (props) => {
  const { name, status, img } = props.dentist;
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <Col md={6} lg={6} xl={4} xs={12}>
      <div className="single-feature-box sigle-doctor">
        <FontAwesomeIcon icon={img} />
        <div className="doctors-info" data-aos="fade-left">
          <h3 className="mb-0">{name}</h3>
          <p>{status}</p>
        </div>
      </div>
    </Col>
  );
};

export default Doctors;
