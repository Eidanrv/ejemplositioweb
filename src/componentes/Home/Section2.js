import React from "react";
import { useNavigate } from "react-router-dom";
import "./Section2.css"; // Asegúrate de tener este archivo
import Img1 from "./imagenes/carrucel3.jpg";
import Img2 from "./imagenes/carrucel4.jpg";
import Img3 from "./imagenes/carrucel5.jpg";

export const Section2 = () => {
  const navigate = useNavigate();

  const handleRedirect = (ruta) => {
    navigate(ruta);
  };

  return (
    <section id="seccion2">
      <div className="section2-container">
        <div className="card" onClick={() => handleRedirect("/platillos")}>
          <img src={Img1} alt="Platillos" className="img-home" />
          <h3>Platillos</h3>
        </div>

        <div className="card" onClick={() => handleRedirect("/postres")}>
          <img src={Img2} alt="Postres" className="img-home" />
          <h3>Postres</h3>
        </div>

        <div className="card" onClick={() => handleRedirect("/bebidas")}>
          <img src={Img3} alt="Bebidas" className="img-home" />
          <h3>Bebidas</h3>
        </div>
      </div>
    </section>
  );
};
