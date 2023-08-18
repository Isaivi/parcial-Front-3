import { useState } from "react";
import "./App.css"
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [nombre, setNombre] = useState("");
  const [libro, setLibro] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const [mostrarCard, setMostrarCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  //Validando
  const nombreValido = nombre.trim().length >= 3;
  const libroValido = libro.length >= 6;

  if (nombreValido && libroValido) {
    setMostrarCard(true);
    {mostrarCard && <Card nombre={nombre} libroFavorito={libro} />}
    
  } else {
    setMostrarError(true);
    {mostrarError && (alert("Por favor chequea que la información sea correcta."))}

  }



  return (
    <> 
    <div className="App">

      <h1>Elige un Libro</h1>
      <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
       <input type="text" placeholder="Ingresa tu Libro Favorito" value={libro} onChange={(e) => setLibro(e.target.value)}/>
       <button type="submit"> Enviar </button>
      </form> 
      
    </div>
    </>
  );
}

export default App;
