import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <h1 className=" text-3xl to-black"> Menu</h1>
      <Link to="/nuevo_platillo" className="bg-blue-700 hover:bg-blue-600 inline-block mb-5 p-2 text-white uppercase font-bold">Agregar Platillo</Link>
    </>
  );
}
export default Menu;