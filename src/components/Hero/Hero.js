import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero" id="hero">
      <img src={imageSrc} alt="beach" className="hero__img" />
      <h1 className="hero__title"> Viajá simple.</h1>
    </div>
  );
};

Hero.propTypes = {
  imageSrc: PropTypes.string,
};

export default Hero;
