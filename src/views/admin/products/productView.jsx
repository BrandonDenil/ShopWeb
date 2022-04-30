import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import { getRequest } from '../../../libraries/Functions';
import { useParams } from 'react-router';

const VerProducto = () => {
    const [inputs, setInputs] = useState({})
    const [marcas, setMarcas] = useState([])
    const [categorias, setCategorias] = useState([])
    const { id } = useParams()

    useEffect(() => {

        getRequest('/marca').then(result => {
            setMarcas(result.data)
        })

        getRequest('/categoria_producto').then(result => {
            setCategorias(result.data)
        })
    }, [])

    return (<>
        <div className="row justify-content-center mt-3">
            <div className="col-10">
                <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1">
                                <Link to="/admin/productos"><button class="btn btn-outline-primary"><BsArrowLeft /></button></Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                                <h5 className="card-title">Editando {id}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-6">
                                <label for="Nombre" className="form-label">Nombre del producto</label>
                                <input type="text" className="form-control" id="Nombre" placeholder="" />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="Precio" className="form-label">Precio</label>
                                <input type="number" className="form-control" id="Nombre" placeholder="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-6">
                                <label for="Cantidad" className="form-label">Cantidad</label>
                                <input type="text" className="form-control" id="Nombre" placeholder="" />
                            </div>
                            <div className="col-6 mb-3">
                                <label for="Descripción" className="form-label">Descripcion</label>
                                <input type="number" className="form-control" id="Nombre" placeholder="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3 col-6">
                                <label for="Marca" className="form-label">Marca</label>
                                <select id="marca" className="form-control">
                                    {
                                        marcas.length > 0 ? <>
                                            {
                                                marcas.map(item => (
                                                    <option>{item.Nombre}</option>
                                                ))
                                            }
                                        </> : <></>
                                    }
                                </select>
                            </div>
                            <div className="col-6 mb-3">
                                <label for="categoria" className="form-label">Categoría</label>
                                <select className="form-control" id="categoria">
                                    {
                                        categorias.length > 0 ? <>
                                            {
                                                categorias.map(item => (
                                                    <option>{item.Categoria}</option>
                                                ))
                                            }
                                        </> : <></>
                                    }
                                </select>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default VerProducto