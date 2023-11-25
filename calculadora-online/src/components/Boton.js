import React from 'react';
import Botones from '../stylesheets/Botones.css';

  function Boton(props) {
    const esOperador = valor => {
      return isNaN(valor) && (valor != '.') && (valor != '=');
    };
    return (
      <div
        className={`boton-contenedor ${esOperador(props.children) ? "operador" : ''}`.trimEnd()} >
        {props.children}
      </div>
    );
  }

  export default Boton
