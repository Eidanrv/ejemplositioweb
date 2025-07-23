import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaStar,
} from "react-icons/fa";
import "./Contacto.css";

export const Contacto = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formEnviado, setFormEnviado] = useState(false); // 👈 nuevo estado

  const handleRating = (value) => setRating(value);

  const handleEnviar = (e) => {
    e.preventDefault();
    setFormEnviado(true); // 👈 mostrar mensaje de agradecimiento
  };

  const handleResetFormulario = () => {
    setFormEnviado(false); // 👈 volver a mostrar el formulario
  };

  return (
    <div className="contacto-container">
      <h2 className="contacto-heading">Contáctanos</h2>

      <div className="contacto-section">
        <p>
          <FaPhone className="contacto-icon" /> Teléfono:{" "}
          <strong>+591 123 456 7890</strong>
        </p>

        <a
          href="https://wa.me/521234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="contacto-whatsapp"
        >
          <FaWhatsapp className="contacto-icon" />
          Contáctanos por WhatsApp: <strong>+591 123 456 7890</strong>
        </a>
      </div>

      <div className="contacto-section">
        <p>Puedes ver nuestras ofertas especiales en:</p>
        <div className="contacto-socials">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-social-link"
          >
            <FaFacebook size={32} color="#1877f2" />
            <span className="social-name">/DeliciasExpress</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-social-link"
          >
            <FaInstagram size={32} color="#e1306c" />
            <span className="social-name">@delicias_express</span>
          </a>
        </div>
      </div>

      <div className="contacto-section">
        <h3>Califícanos</h3>
        <div className="estrellas">
          {[...Array(5)].map((_, index) => {
            const ratingValue = index + 1;
            return (
              <label key={ratingValue}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRating(ratingValue)}
                />
                <FaStar
                  className="estrella"
                  size={30}
                  color={ratingValue <= (hover || rating) ? "#ffc107" : "#ccc"}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                />
              </label>
            );
          })}
        </div>
      </div>

      <div className="contacto-section">
        {!formEnviado ? (
          <>
            <h3>¿Deseas dejar un comentario?</h3>
            <form className="comentario-form" onSubmit={handleEnviar}>
              <input type="text" placeholder="Tu nombre" required />
              <input type="email" placeholder="Tu correo" required />
              <textarea
                placeholder="Escribe tu comentario..."
                required
              ></textarea>
              <button type="submit">Enviar</button>
            </form>
          </>
        ) : (
          <div className="mensaje-gracias">
            <h3>¡Gracias por dejar tus comentarios!</h3>
            <button onClick={handleResetFormulario}>
              Enviar más comentarios
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
