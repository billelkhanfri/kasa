import React from "react";
import Collapse from "../components/molecules/Collapse";
import HeroBanner from "../components/molecules/HeroBanner";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import AboutData from "../local-json/about.json";
import Banner from "../assets/about.png";
import PropTypes from "prop-types";

function About(props) {
  return (
    <>
      <Header />
      <HeroBanner picture={Banner} hauteur={"223px"}></HeroBanner>
      <>
        {AboutData &&
          AboutData.map((abouts) => (
            <Collapse key={abouts.title} {...abouts} exportedto="about" />
          ))}
        ;
      </>
      <Footer />
    </>
  );
}
About.propTypes = {
  picture: PropTypes.string.isRequired,
};

About.defaultProps = {
  title: "",
  picture: "",
};
export default About;
