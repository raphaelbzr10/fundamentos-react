import React from 'react';
import ReactDOM from "react-dom";
import './index.css';

import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

ReactDOM.render(
  <div>
    <Primeiro></Primeiro>
    <ComParametro 
      titulo="Situação do Aluno" 
      aluno="Pedro" nota={9.3}></ComParametro>
  </div>, 
  document.getElementById('root')
);