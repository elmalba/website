import React from 'react';
import './Contact.css'; // Importar el archivo CSS para estilos

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contacto</h2>
      <p>Si estás interesado en trabajar conmigo o quieres saber más, no dudes en contactarme.</p>
      <div className="contact-info">
        <p>Email: Malba@malba.cl</p>
        <p>Github:<a href='https://www.linkedin.com/in/manuel-alba/'> /manuel-alba/ </a></p>
        <p>Linkedin:<a href='https://github.com/elmalba'> /manuel-alba/ </a></p>
  
      </div>
     
    </div>
  );
}

export default Contact;
