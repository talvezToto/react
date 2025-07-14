import logo from './logo.svg';
import './App.css';

<Saludo nombre="Santiago" />
<Saludo nombre="Laura" />

function App() {
  return (
    <div>
      <h1>¡Hola React!</h1>
      <p>Este es mi primer componente.</p>
    </div>
  );
}

export default App;

import Saludo from './Saludo';

function App() {
  return (
    <div>
      <h1>Hola React</h1>
      <Saludo />
    </div>
  );
}


