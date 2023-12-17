import React from "react";
import Dentist from "../../../components/Dentist/Dentist";
import Service from "../../../components/Service/Service";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <Dentist />
    </>
  );
};

export default Home;
