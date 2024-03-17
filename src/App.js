import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [resultado, setResultado] = useState('');

  const clickBoton = (e) => {
    setResultado(resultado.concat(e.target.value));
  };

  const limpiar = (e) =>{
    setResultado("");
  }

  const borrar = (e) =>{
    setResultado(resultado.slice(0,resultado.length - 1));
  }
  const calcular = (e) =>{
    try {
      setResultado(eval(resultado));
    } catch (error) {
      setResultado("SyntaxError");
    }
    

  }
  return (
    <>
      <div className='container'>
        <form>
          <input type='text' value={resultado} />
        </form>
        <div className='teclado-numerico'>
          <button className='resaltado' id='limpiar' onClick={limpiar}>Limpiar</button>
          <button className='resaltado' onClick={borrar}>C</button>
          <button className='resaltado' onClick={clickBoton} value={'/'}>&divide;</button>
          <button onClick={clickBoton} value={'7'}>7</button>
          <button onClick={clickBoton} value={'8'}>8</button>
          <button onClick={clickBoton} value={'9'}>9</button>
          <button className='resaltado' onClick={clickBoton} value={'*'}>&times;</button>
          <button onClick={clickBoton} value={'4'}>4</button>
          <button onClick={clickBoton} value={'5'}>5</button>
          <button onClick={clickBoton} value={'6'}>6</button>
          <button className='resaltado' onClick={clickBoton} value={'-'}>&ndash;</button>
          <button onClick={clickBoton} value={'1'}>1</button>
          <button onClick={clickBoton} value={'2'}>2</button>
          <button onClick={clickBoton} value={'3'}>3</button>
          <button className='resaltado' onClick={clickBoton} value={'+'}>+</button>
          <button onClick={clickBoton} value={'0'}>0</button>
          <button className='resaltado' onClick={clickBoton} value={'.'}>.</button>
          <button className='resaltado' id='resultado' onClick={calcular} value={'='}>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
