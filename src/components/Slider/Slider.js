import React from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";

const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const renderContent = () => {
    if (!flipped) {
      return (
        <div className="slider__container" id="slider">
          <img src={imageSrc} alt="travel" className="slider__image" />
          <div className="slider__content">
            <h2 className="slider__title">{title}</h2>
            <p> {subtitle} </p>
          </div>
        </div>
      );
    } else {
      return (
        <div div className="slider__container">
          <div className="slider__content">
            <h2 className="slider__title">{title}</h2>
            <p> {subtitle} </p>
          </div>
          <img src={imageSrc} alt="travel" className="slider__image" />
        </div>
      );
    }
  };

  return (
    <div className={inView ? "slider slider--zoom" : "slider"} ref={ref}>
      {renderContent()}{" "}
    </div>
  );
};

export default Slider;
