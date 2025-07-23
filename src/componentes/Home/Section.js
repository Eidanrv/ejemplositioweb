import React from "react";
import "./Home.css";
import Image from "./Image";
import Fondo from "./imagenes/Fondo.jpg"; // imagen de fondo
import Img1 from "./imagenes/carrucel.jpg";
import Img2 from "./imagenes/carrucel2.jpg";
import Img3 from "./imagenes/carrucel3.jpg";
import Img4 from "./imagenes/carrucel4.jpg";
import Img5 from "./imagenes/carrucel5.jpg";

export const Section = () => {
  return (
    <div
      className="carousel-background"
      style={{ backgroundImage: `url(${Fondo})` }}
    >
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image src={Img1} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Img2} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Img3} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Img4} className="carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <Image src={Img5} className="carousel-img" alt="..." />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
