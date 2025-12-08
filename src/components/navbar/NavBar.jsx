import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">

        <div className="logo"><i className="bi bi-terminal"></i></div>

        <ul className={`navLinks ${open ? "open" : ""}`}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#aboutMe">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>

        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
