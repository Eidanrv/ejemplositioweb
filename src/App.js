import "./styles.css";
import { Header } from "./componentes/NavBar/NavBar";
import { Footer } from "./componentes/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas principales
import { Section } from "./componentes/Home/Section";
import { Section1 } from "./componentes/Seccion1/Section1";
import { Section2 } from "./componentes/Home/Section2";

// Subpáginas de Menús
import { Platillos } from "./componentes/Platillos/Platillos";
import { Postres } from "./componentes/Postres/Postres";
import { Bebidas } from "./componentes/Bebidas/Bebidas";

// Otras páginas
import { Ubicacion } from "./componentes/Ubicacion/Ubicacion";
import { Contacto } from "./componentes/Contacto/Contacto";
import Venta from "./componentes/Venta/Venta";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section />
                <Section1 />
                <Section2 />
              </>
            }
          />
          <Route path="/platillos" element={<Platillos />} />
          <Route path="/postres" element={<Postres />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/venta" element={<Venta />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
