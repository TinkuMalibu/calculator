import './App.css';
import Pascal from './images/Pascal.png';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

  function App() {

    const [input, setInput] = useState('');

    const agregarInput = valor => {
      setInput(input + valor);
    };

    const calcularResultado = () => {
      if (input) {
      setInput(evaluate(input))
    } else {
      alert ('Please, enter a value')
    };
  };

    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className='logo-pascal'
          src= {Pascal}
          alt= 'Pascal Portrait' />
        </div>
        <div className="contenedor-calculadora">
            <Pantalla
            input= {input} />
          <div className="fila">
            <Boton clickManagement={agregarInput}>1</Boton>
            <Boton clickManagement={agregarInput}>2</Boton>
            <Boton clickManagement={agregarInput}>3</Boton>
            <Boton clickManagement={agregarInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton clickManagement={agregarInput}>4</Boton>
            <Boton clickManagement={agregarInput}>5</Boton>
            <Boton clickManagement={agregarInput}>6</Boton>
            <Boton clickManagement={agregarInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton clickManagement={agregarInput}>7</Boton>
            <Boton clickManagement={agregarInput}>8</Boton>
            <Boton clickManagement={agregarInput}>9</Boton>
            <Boton clickManagement={agregarInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton clickManagement={calcularResultado}>=</Boton>
            <Boton clickManagement={agregarInput}>0</Boton>
            <Boton clickManagement={agregarInput}>.</Boton>
            <Boton clickManagement={agregarInput}>/</Boton>
            </div>
          <div className="fila">
            <BotonClear clearManagement = {() => setInput('')}>
              Clear
            </BotonClear>

          </div>
        </div>
      </div>
    );
  }

  export default App;
