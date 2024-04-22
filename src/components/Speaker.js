import React from 'react';
import './Speaker.css'; // Importar el archivo CSS para estilos

function Speaker() {
  const videos = [
    { id: 'kROyOQ9Sn6E', title: 'What, who, when, where and why use Go' },
    { id: 'e-JhnuYfoyw', title: 'La mejor forma de generar observabilidad y monitoreo a nuestras aplicaciones en la nube' },
    { id: 'oVozvu_58oI', title: 'Cómo Elegir la Base de Datos Adecuada para Tu Proyecto: Una Guía entre SQL y NoSQL' },
    // Puedes añadir más videos usando el formato de objeto aquí.
  ];

  return (
    <div id="speaker" className="speaker-talks">
      <h2>Charlas en YouTube</h2>
      {videos.map(video => (
        <div key={video.id} className="video">
          <h3>{video.title}</h3>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.title}
          ></iframe>
        </div>
      ))}
    </div>
  );
}

export default Speaker;
