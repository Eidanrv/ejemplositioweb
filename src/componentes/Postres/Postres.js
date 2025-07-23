import React, { useState } from "react";
import "./Postres.css";
import Img1 from "./Imagenes/Postre.jpg";
import Img2 from "./Imagenes/Postre2.jpg";
import Img3 from "./Imagenes/Postre3.jpg";
import Img4 from "./Imagenes/Postre4.jpeg";
import { useNavigate } from "react-router-dom";

const postresData = [
  {
    id: 1,
    nombre: "Pastel de Chocolate",
    ingredientes: [
      "Harina",
      "Cacao",
      "Huevos",
      "Azúcar",
      "Cobertura de chocolate",
    ],
    precio: 3.5,
    imagen: Img1,
  },
  {
    id: 2,
    nombre: "Flan de Vainilla",
    ingredientes: [
      "Leche",
      "Huevo",
      "Azúcar",
      "Esencia de vainilla",
      "Caramelo",
    ],
    precio: 2.99,
    imagen: Img2,
  },
  {
    id: 3,
    nombre: "Tarta de Fresa",
    ingredientes: ["Masa", "Crema pastelera", "Fresas frescas", "Gelatina"],
    precio: 4.25,
    imagen: Img3,
  },
  {
    id: 4,
    nombre: "Helado Artesanal",
    ingredientes: [
      "Leche",
      "Crema",
      "Fruta natural",
      "Azúcar",
      "Topping a elección",
    ],
    precio: 3.99,
    imagen: Img4,
  },
];

export const Postres = () => {
  return (
    <div>
      {postresData.map((postre) => (
        <PostreCard key={postre.id} data={postre} />
      ))}
    </div>
  );
};

const PostreCard = ({ data }) => {
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
