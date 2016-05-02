import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';
import Knight from './Knight';

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root')
);
