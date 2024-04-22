import React from 'react';
import './Navbar.css'; // Importar CSS para estilos

function Navbar() {
    const scrollTo = (id,event) => {
        event.preventDefault(); 
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home" onClick={() => scrollTo('home')}>Inicio</a></li>
        <li><a href="#about" onClick={() => scrollTo('about')}>Sobre mí</a></li>
        <li><a href="#speaker" onClick={() => scrollTo('speaker')}>Charlas</a></li>
        <li><a href="#projects" onClick={() => scrollTo('projects')}>Proyectos</a></li>
        <li><a href="#contact" onClick={() => scrollTo('contact')}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
