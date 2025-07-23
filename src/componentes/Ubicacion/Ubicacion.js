import React from "react";

export const Ubicacion = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Ubicación de nuestro restaurante
      </h2>

      <iframe
        title="Mapa de ubicación"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9199749758576!2d-74.00601538459307!3d40.712775979330504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31628e02e7%3A0x1c9b0c63bbba7c77!2sOne%20World%20Trade%20Center!5e0!3m2!1ses!2sus!4v1686390000000!5m2!1ses!2sus"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#1b1b1b",
          color: "#fff",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <h3>Horario de Atención</h3>
        <p>
          <strong>Lunes a Viernes:</strong> 10:00 AM - 10:00 PM
        </p>
        <p>
          <strong>Sábados:</strong> 12:00 PM - 11:00 PM
        </p>
        <p>
          <strong>Domingos:</strong> 12:00 PM - 9:00 PM
        </p>
      </div>
    </div>
  );
};
