import React from "react";
import "./Form.css";

const FormSuccess = () => {
  return (
    <div className="form__content__right">
      <div className="form__success">
        Hemos recibido tu mensaje!
        <img
          src="../assets/img/img-3.svg"
          alt="success"
          className="form__img__2"
        ></img>
      </div>
    </div>
  );
};

export default FormSuccess;
