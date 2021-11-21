import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className=" md:w-2/5 xl:w-1/5 bg-gray-800">
            <div className="p-6">
            <p className="uppercase text-white text-2xl tracking-wide text-bolt text-center">Restaurant Aplication</p>
            <p className=" mt-3 text-gray-600"> Administrar tu App nunca fue tan facil</p>
            <nav>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" to="/" end>Orders</NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900" to="/menu">Menu</NavLink>
                <NavLink className="p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-900"   to="/nuevo_platillo">Nuevo Platillo</NavLink>
            </nav>
            </div>
        </div>
    );
}
export default Sidebar;