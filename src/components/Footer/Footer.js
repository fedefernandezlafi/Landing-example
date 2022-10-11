import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container__footer" id="footer">
      <div className="footer_row">
        <h3 className="footer_logo"> Mendotravel </h3>
      </div>
      <div className="footer_row">
        <h3 className="footer_title"> Secciones </h3>
        <a className="footer_item" href="#">
          {" "}
          Inicio{" "}
        </a>
        <a className="footer_item" href="#">
          {" "}
          Viajes{" "}
        </a>
        <a className="footer_item" href="#">
          {" "}
          Contacto{" "}
        </a>
      </div>
      <div className="footer_row">
        <h3 className="footer_title"> Contacto </h3>
        <p className="footer_item" href="#">
          {" "}
          Direccion{" "}
        </p>
        <p className="footer_item" href="#">
          {" "}
          Email{" "}
        </p>
        <p className="footer_item" href="#">
          {" "}
          Telefono{" "}
        </p>
      </div>
      <div className="footer_row">
        <h3 className="footer_title"> Redes </h3>
        <a
          href="http://facebook.com"
          type="button"
          className="footer__anchord"
          target={"_blank"}
          rel="noopener"
        >
          {" "}
          <FaFacebookF size={25} className="socialmedia__icon" />{" "}
        </a>
        <a
          href="http://instagram.com"
          type="button"
          className="footer__anchord"
          target={"_blank"}
          rel="noopener"
        >
          {" "}
          <FaInstagram size={25} className="socialmedia__icon" />{" "}
        </a>{" "}
        <a
          href="http://linkedin.com"
          type="button"
          className="footer__anchord"
          target={"_blank"}
          rel="noopener"
        >
          {" "}
          <FaLinkedinIn size={25} className="socialmedia__icon" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
