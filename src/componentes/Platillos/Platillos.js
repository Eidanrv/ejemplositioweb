import React, { useState } from "react";
import "./Platillos.css";
import Img1 from "../Imagenes/platillo1.jpg";
import Img2 from "./Imagenes/carrucel2.jpg";
import Img3 from "./Imagenes/carrucel3.jpg";
import Img4 from "./Imagenes/vegana.jpeg";
import { useNavigate } from "react-router-dom";

const platillosData = [
  {
    id: 1,
    nombre: "Hamburguesa Simple",
    ingredientes: [
      "Pan artesanal",
      "Carne de res",
      "Lechuga",
      "Queso cheddar",
      "Salsa especial",
    ],
    precio: 5.99,
    imagen: Img1,
  },
  {
    id: 2,
    nombre: "Hamburguesa Doble",
    ingredientes: [
      "Pan artesanal",
      "Doble carne",
      "Lechuga",
      "Tomate",
      "Queso suizo",
    ],
    precio: 7.99,
    imagen: Img2,
  },
  {
    id: 3,
    nombre: "Hamburguesa BBQ",
    ingredientes: [
      "Pan brioche",
      "Carne de res",
      "Cebolla caramelizada",
      "Queso cheddar",
      "Salsa BBQ",
    ],
    precio: 6.99,
    imagen: Img3,
  },
  {
    id: 4,
    nombre: "Hamburguesa Vegana",
    ingredientes: [
      "Pan integral",
      "Hamburguesa de soya",
      "Espinaca",
      "Tofu",
      "Mostaza dulce",
    ],
    precio: 6.49,
    imagen: Img4,
  },
];

export const Platillos = () => {
  return (
    <div>
      {platillosData.map((platillo) => (
        <PlatilloCard key={platillo.id} data={platillo} />
      ))}
    </div>
  );
};

const PlatilloCard = ({ data }) => {
  const [cantidad, setCantidad] = useState(1);
  const navigate = useNavigate();

  const aumentar = () => setCantidad(cantidad + 1);
  const disminuir = () => cantidad > 1 && setCantidad(cantidad - 1);
  const total = (data.precio * cantidad).toFixed(2);

  const handlePedir = () => {
    navigate("/venta", {
      state: {
        nombre: data.nombre,
        cantidad: cantidad,
        total: total,
      },
    });
  };

  return (
    <div className="platillo-container">
      <img src={data.imagen} className="platillo-img" alt={data.nombre} />
      <div className="platillo-info">
        <h2>{data.nombre}</h2>
        <div className="detalle-cajas">
          <div className="ingredientes">
            <h4>Ingredientes:</h4>
            <ul>
              {data.ingredientes.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="precio-cantidad">
            <h4>Precio unitario: ${data.precio.toFixed(2)}</h4>
            <h4>Total: ${total}</h4>
            <div className="cantidad-titulo">
              <h4>Cantidad:</h4>
              <span className="cantidad-x">x {cantidad}</span>
            </div>
            <div className="cantidad-control">
              <button onClick={disminuir}>-</button>
              <span>{cantidad}</span>
              <button onClick={aumentar}>+</button>
            </div>
            <div className="botones">
              <button className="cancelar" onClick={() => setCantidad(1)}>
                Cancelar
              </button>
              <button className="pedir" onClick={handlePedir}>
                Pedir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
