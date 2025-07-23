// src/pages/Venta.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Venta.css"; // si tienes un archivo de estilos

const Venta = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { nombre, cantidad, total } = location.state || {
    nombre: "Producto desconocido",
    cantidad: 0,
    total: "0.00",
  };

  return (
    <div className="venta-container">
      <h1>Gracias por tu compra</h1>
      <div className="detalle-venta">
        <p>
          <strong>Producto:</strong> {nombre}
        </p>
        <p>
          <strong>Cantidad:</strong> {cantidad}
        </p>
        <p>
          <strong>Total:</strong> ${total}
        </p>
      </div>
      <button className="volver" onClick={() => navigate("/")}>
        Volver al menú principal
      </button>
    </div>
  );
};

export default Venta;
