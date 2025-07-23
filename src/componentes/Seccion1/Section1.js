import React from "react";
import { useNavigate } from "react-router-dom";
import "./Seccion1.css";
import Img1 from "./imagenes/carrucel.jpg";
import Img2 from "./imagenes/carrucel2.jpg";
import Img3 from "./imagenes/Postres.jpg";
import Img4 from "./imagenes/Limonada.jpg";

export const Section1 = () => {
  const navigate = useNavigate();

  const handleClick = (ruta) => {
    navigate(ruta);
  };

  return (
    <section id="boletin">
      <div className="contenedor section1-title">
        <h2>Estos son nuestros deliciosos platos</h2>
        <p>Descubre lo mejor de nuestro menú preparado para ti</p>
      </div>

      <div className="contenedor section1-container">
        <div className="item">
          <button
            className="img-button"
            onClick={() => handleClick("/platillos")}
          >
            <img src={Img1} alt="Hamburguesa Simple" className="section1-img" />
          </button>
          <div className="item-text">
            <h5>Hamburguesa Simple</h5>
            <p>Clásica hamburguesa con carne de res, queso y pan artesanal.</p>
          </div>
        </div>

        <div className="item">
          <button
            className="img-button"
            onClick={() => handleClick("/platillos")}
          >
            <img src={Img2} alt="Hamburguesa Doble" className="section1-img" />
          </button>
          <div className="item-text">
            <h5>Hamburguesa Doble</h5>
            <p>Una hamburguesa con doble carne, doble queso y mucho sabor.</p>
          </div>
        </div>

        <div className="item">
          <button
            className="img-button"
            onClick={() => handleClick("/postres")}
          >
            <img src={Img3} alt="Tarta de Fresa" className="section1-img" />
          </button>
          <div className="item-text">
            <h5>Tarta de Fresa</h5>
            <p>Delicioso postre con base crujiente y fresas frescas.</p>
          </div>
        </div>

        <div className="item">
          <button
            className="img-button"
            onClick={() => handleClick("/bebidas")}
          >
            <img src={Img4} alt="Limonada Natural" className="section1-img" />
          </button>
          <div className="item-text">
            <h5>Limonada Natural</h5>
            <p>
              Refrescante limonada hecha con jugo de limón recién exprimido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
