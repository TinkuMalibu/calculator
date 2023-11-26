import React from 'react';
import Botones from '../stylesheets/Botones.css';

  function Boton(props) {
    const esOperador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
    };
    return (
      <button
        className={`boton-contenedor ${esOperador(props.children) ? "operador" : ''}`.trimEnd()}
        onClick= {() => props.clickManagement(props.children)}>

        {props.children}
      </button>
    );
  }

  export default Boton
