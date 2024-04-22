import React from 'react';
import './Projects.css'; // Importar el archivo CSS para estilos

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Firma Electronica",
      description: "Este Emblematico proyecto fue desarrollando en conjunto con mis equipos de arquitectura y desarrollo logrando crear un gran sistema de firma electronica que soporta toda la tramitacion de documentos de la universidad de chile. Fue desarrollado en JS y Golang.",
      image: "/pics/firma.png",
      url: "https://ceropapel.uchile.cl"
    },
    {
      id: 2,
      title: "Salas facultad de Ingenieria",
      description: "Este pequeño portal resuelve la problematica diaria de los estudiantes de la facultad de ingenieria de la universidad diego portals, donde pueden ver la salas por sus asignaturas y horarios, actualmente se encuentra next js",
      image: "/pics/salas.png",
      url: "https://salas.docencia-eit.cl"
    },
    {
      id: 3,
      title: "Elastic Community",
      description: "Este repositorio de github fue creado para la comunidad de Elastic Search Chile, donde se pueden encontrar distintos proyectos de la comunidad y charlas de la comunidad.",
      image: "/pics/elastic-github.png",
      url: "https://github.com/elastic-community"
    },
    {
      id: 4,
      title: "La tiendita",
      description: "Este Proyecto es un ejemplo de como crear un minimarket y luego hacer reporteria usando grafana. esta desarrollado en next js y es de codigo libre",
      image: "/pics/latienda.png",
      url: "https://js.malba.cl"
    }, 
    {
        id: 5,
        title: "Docencia",
        description: "Ide Online que le permite a los estudiantes poder programar y probar sus codigos en linea, esta desarrollado en next js y golang",
        image: "/pics/docencia.png",
        url: "https://docencia-eit.udp.cl"
      },
  ];

  return (
    <div id="projects" className="projects">
      <h2>Mis Proyectos</h2>
      {projects.map(project => (
        <div key={project.id} className="project">
         <a href={project.url}> <img src={project.image} alt={project.title} /> </a>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
