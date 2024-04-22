import React from 'react';
import './Navbar.css'; // Importar CSS para estilos

function Navbar() {
    const scrollTo = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      
  return (
    <nav id="home" className="navbar">
      <ul className="nav-links">
        <li><a onClick={() => scrollTo('home')}>Inicio</a></li>
        <li><a onClick={() => scrollTo('about')}>Sobre mí</a></li>
        <li><a onClick={() => scrollTo('speaker')}>Charlas</a></li>
        <li><a onClick={() => scrollTo('projects')}>Proyectos</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
