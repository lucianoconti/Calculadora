import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [resultado, setResultado] = useState('');

  const clickBoton = (e) => {
    setResultado(resultado.concat(e.target.value));
  };
  return (
    <>
      <div className='container'>
        <form>
          <input type='text' value={resultado} />
        </form>
        <div className='teclado-numerico'>
          <button>Limpiar</button>
          <button>C</button>
          <button>&divide;</button>
          <button onClick={clickBoton} value={'7'}>
            7
          </button>
          <button>8</button>
          <button>9</button>
          <button>&times;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&ndash;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
