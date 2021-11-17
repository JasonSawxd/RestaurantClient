//Dependencias
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Componentes.
import Ordenes from './components/pages/ordenes';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Ordenes/>} />
      </Routes>
    </div>
  );
}

export default App;
