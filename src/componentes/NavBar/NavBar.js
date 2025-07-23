import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    // cerrar dropdown si se cierra el menú
    if (menuOpen) setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // cerrar todo al elegir opción
  const closeAllMenus = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="header">
      <div className="contenedor">
        <div className="logo-container" onClick={() => setMenuOpen(false)}>
          <h1 className="logo-text">
            <span className="resaltado">🍔 El Sabrosón</span>
            <br />
            <span className="subtitulo">¡Donde el sabor cobra vida!</span>
          </h1>
        </div>

        {/* Botón hamburguesa visible solo en móvil */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className={`bar ${menuOpen ? "change" : ""}`}></span>
          <span className={`bar ${menuOpen ? "change" : ""}`}></span>
          <span className={`bar ${menuOpen ? "change" : ""}`}></span>
        </button>

        {/* Menu de navegación */}
        <nav className={`nav ${menuOpen ? "show" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" onClick={closeAllMenus}>
                Inicio
              </Link>
            </li>
            <li className="dropdown">
              <button
                className="dropdown-toggle"
                onClick={toggleDropdown}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                Menús
              </button>
              <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                <li>
                  <Link to="/platillos" onClick={closeAllMenus}>
                    Platillos
                  </Link>
                </li>
                <li>
                  <Link to="/postres" onClick={closeAllMenus}>
                    Postres
                  </Link>
                </li>
                <li>
                  <Link to="/bebidas" onClick={closeAllMenus}>
                    Bebidas
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/ubicacion" onClick={closeAllMenus}>
                Ubicación
              </Link>
            </li>
            <li>
              <Link to="/contacto" onClick={closeAllMenus}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
