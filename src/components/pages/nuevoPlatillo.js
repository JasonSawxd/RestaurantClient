import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FirebaseContext } from '../../firebase';

import {useNavigate} from 'react-router-dom';

const NuevoPlatillo = () => {
  //Context con las operaciones de firebase.
  const { firebase } = useContext(FirebaseContext);
  //Hook para redireccionar
  const navigete = useNavigate();
  //valores iniciales del formulario 
  const formik = useFormik({
    initialValues: {
      nombre: '',
      precio: '',
      categoria: '',
      imagen: '',
      detalle: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, 'El campo Nombre del platillo debe tener minimo 3 caracteres')
        .required('El nombre del platillo es Obligatorio'),
      precio: Yup.number()
        .min(1, 'Debes agregar un numero mayor que 0')
        .required('El Precio es requerido'),
      categoria: Yup.string()
        .required('Seleccione una Categoria para el Producto'),
      detalle: Yup.string()
        .min(3, 'La descripcion debe ser mayor de 3 caracteres')
        .required('La descripcion es obligatoria')
    }),
    onSubmit: datos => {// prop para enviar los valores del formulario
      try {
        datos.existencia = true;
        firebase.db.collection('productos').add(datos);
        //Redireccionar.
        navigete('/menu');
      } catch (error) {
        console.log(error);
      }
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
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ?
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Ocurrio un Error </p>
                <p>{formik.errors.nombre}</p>
              </div> : null
            }
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
              <input className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="precio"
                placeholder="$20.00"
                min="0"
                type="number"
                value={formik.values.precio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.precio && formik.errors.precio ?
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Ocurrio un Error</p>
                <p>{formik.errors.precio}</p>
              </div>
              : null}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="categoria">Categoria</label>
              <select className=" shadow qappearance-none border rounded w-full py-2 px-3 text-gray-700"
                id="categoria"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">--Seleccione--</option>
                <option value="desayuno">Desayuno</option>
                <option value="cena">Cena</option>
                <option value="bebida">Bebidas</option>
                <option value="postre">Postre</option>
                <option value="ensalada">Ensalada</option>
              </select>
            </div>
            {formik.touched.categoria && formik.errors.categoria ?
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Ocurrio un Error</p>
                <p>{formik.errors.categoria}</p>
              </div> : null
            }
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
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.detalle && formik.errors.detalle ?
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                <p className="font-bold">Ocurrio un Error</p>
                <p>{formik.errors.detalle}</p>
              </div> : null
            }
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