import React, { useState } from "react";
import ContactForm from "./ContactForm";
import FormSucess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="form__container">
        <span className="close__btn"> X </span>
        <div className="form__content__left">
          <img
            src="../assets/img/img-2.svg"
            alt="astronaut"
            className="form__img"
          ></img>
        </div>
        {!isSubmitted ? (
          <ContactForm submitForm={submitForm} />
        ) : (
          <FormSucess />
        )}
      </div>
    </>
  );
};

export default Form;
