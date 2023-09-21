import React from "react";
import "../styles-sheets/Testimonio.css";

function Testimonio(props) {
  const imgAlt = "Foto de " + props.nombre;
  return (
    <div className='contenedor-testimonio'>
      <img 
      className='imagen-testimonio' 
      src={require(`../imagenes/${props.persona.imagen}.png`)}
      alt={imgAlt}/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.persona.nombre}</strong> en {props.persona.pais}</p>
        <p className="cargo-testimonio">{props.persona.cargo} en <strong>{props.persona.empresa}</strong></p>
        <p className="texto-testimonio">"{props.persona.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;