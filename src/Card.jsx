//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import { useState } from "react";
import App from "./App";

function Card({nombre, libro}) {
  return (
    <div className="card">
      
      <p>Nombre: {nombre}</p>
      <p>Libro favorito: {libro}</p>
    </div>
  );
}

export default Card;
