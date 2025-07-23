import React, { useState } from "react";
import "./Bebidas.css";
import Img1 from "./Imagenes/Limonada.jpg";
import Img2 from "./Imagenes/Bebida2.jpg";
import Img3 from "./Imagenes/Bebida3.jpg";
import Img4 from "./Imagenes/Bebida1.jpg";
import { useNavigate } from "react-router-dom";

const bebidasData = [
  {
    id: 1,
    nombre: "Limonada Natural",
    ingredientes: ["Limón", "Agua", "Azúcar", "Hielo"],
    precio: 1.99,
    imagen: Img1,
  },
  {
    id: 2,
    nombre: "Jugo de Naranja",
    ingredientes: ["Naranja fresca", "Azúcar opcional", "Hielo"],
    precio: 2.25,
    imagen: Img2,
  },
  {
    id: 3,
    nombre: "Té Helado",
    ingredientes: ["Té negro", "Limón", "Azúcar", "Hielo"],
    precio: 2.5,
    imagen: Img3,
  },
  {
    id: 4,
    nombre: "Café Frío",
    ingredientes: ["Café espresso", "Leche", "Hielo", "Jarabe de vainilla"],
    precio: 2.75,
    imagen: Img4,
  },
];

export const Bebidas = () => {
  return (
    <div>
      {bebidasData.map((bebida) => (
        <BebidaCard key={bebida.id} data={bebida} />
      ))}
    </div>
  );
};

const BebidaCard = ({ data }) => {
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
