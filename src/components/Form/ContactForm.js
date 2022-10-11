import React from "react";
import { FaExpandArrowsAlt } from "react-icons/fa";
import useForm from "../hooks/useForm";
import validate from "./validateInfo";

const ContactForm = ({ submitForm }) => {
  const { handleChange, values, handleSummit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form__content__right">
      <form className="form" onSubmit={handleSummit}>
        <h2> Contactate con nuestro equipo ahora! </h2>
        <div className="form__inputs">
          <label className="form__label"></label>
        </div>
        <div className="form__inputs">
          <label className="form__label"> Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form__input"
            placeholder="Ingresá tu nombre"
            value={values.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <p> {errors.nombre}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form__input"
            placeholder="Ingresá tu email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p> {errors.email}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__label">Teléfono</label>
          <input
            id="telefono"
            type="text"
            name="telefono"
            className="form__input"
            placeholder="Ingresá tu telefono"
            value={values.telefono}
            onChange={handleChange}
          />
          {errors.telefono && <p> {errors.telefono}</p>}
        </div>
        <div className="form__inputs">
          <label className="form__label"> Mensaje </label>
          <textarea
            id="mensaje"
            type="text"
            name="mensaje"
            className="form__input"
            placeholder="Ingresá tu mensaje"
            value={values.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <p> {errors.mensaje}</p>}
        </div>
        <button className="form__input__btn" type="summit">
          {" "}
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
