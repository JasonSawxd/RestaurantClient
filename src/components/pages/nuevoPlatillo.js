import React from 'react';
import { useFormik } from 'formik';

const NuevoPlatillo = () => {

  //valores iniciales del formulario 
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      detalle:''
    },
    onSubmit: datos => {// prop para enviar los valores del formulario
      console.log(datos);
    }
  })
  return (
    <>
      <h1 className="  font-lighttext-3xl mb-4">Agregar Platillo</h1>
      <div className=" flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
              <input className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="nombre"
                placeholder="Nombre del Platillo"
                value={formik.values.nombre}
                onChange={formik.handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
              <input className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="precio"
                placeholder="$20.00"
                min="0"
                type="number"
                value={formik.values.precio}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>
              <select className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="categoria"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
              >
                <option value="">--Seleccione--</option>
                <option value="desayuno">Desayuno</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebidas</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensalada</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imagen">Imagen</label>
              <input className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="imagen"
                type="file"
                value={formik.values.imagen}
                onChange={formik.hangitdleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="detalle">Detalle</label>
              <textarea className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700 h-40"
                id="detalle"
                placeholder="Detalle del Producto"
                type="text"
                value={formik.values.detalle}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <input className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold rounded-xl"
              type="submit"
              value="Agregar Nuevo Platillo"
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default NuevoPlatillo;