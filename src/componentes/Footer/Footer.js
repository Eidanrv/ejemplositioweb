import "./Footer.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">El Sabrosón</h2>
        <p className="footer-text">Donde el sabor cobra vida.</p>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>

        <div className="footer-info">
          <p>
            &copy; {new Date().getFullYear()} El Sabrosón. Todos los derechos
            reservados.
          </p>
          <p>Ubicación: Calle del Sabor 123, Ciudad Deliciosa</p>
          <p>Contacto: contacto@elsabroson.com</p>
        </div>
      </div>
    </footer>
  );
};
