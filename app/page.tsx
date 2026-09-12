import React from "react";
import Banner from "../section/home1/Banner";
import About from "../section/home1/About";
import Service from "../section/home1/Service";
import Benefit from "../section/home1/Benefit";
import Funfact from "../section/home1/Funfact";
import Project from "../section/home1/Project";
import Testimonial from "../section/home1/Testimonial";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  title: "SPARZ TELECOM | Analog Phones & Business Communication Solutions",
  description:
    "SPARZ TELECOM provides reliable analog telephone and business communication solutions for offices, hotels, hospitals, schools and businesses across India.",
};

const Home: React.FC = () => {
  return (
    <LayoutWrapper>
      <Banner />
      <About />
      <Service />
      <Funfact />
      <Project />
      <Benefit />
      <Testimonial />
    </LayoutWrapper>
  );
};

export default Home;
