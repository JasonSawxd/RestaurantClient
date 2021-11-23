//Dependencias
import React from 'react';
import { Route, Routes } from 'react-router-dom';

//Componentes.
import Ordenes from './components/pages/ordenes';
import Menu from './components/pages/menu';
import NuevoPlatillo from './components/pages/nuevoPlatillo';
import Sidebar from './components/ui/sidebar';
function App() {
  return (
    <div className="md:flex min-h-screen">
    <Sidebar/>
    <div className="md:w2/5 xl:w-1/5 p-5">
    <Routes>
        <Route path="/" exact element={<Ordenes/>} />
        <Route path="/menu" exact element={<Menu/>} />
        <Route path="/nuevo_Platillo" exact element={<NuevoPlatillo/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
