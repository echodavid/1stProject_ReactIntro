
import './App.css';
import Testimonio from './componentes/Testimonio';
import personas from './componentes/data/personas';


function App() {
  const personasList = personas.map((persona) => 
      <Testimonio
        persona={persona}
      />
    );
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        {personasList}
      </div>

      
    </div>
  );
}

export default App;
