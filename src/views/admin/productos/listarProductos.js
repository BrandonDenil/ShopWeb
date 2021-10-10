import React, { useEffect, useState } from "react";
import { getRequest } from "../../../libraries/Functions";
import { BsTrash, BsPencil, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const ListarProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        getRequest('/producto').then(result => {
            setProductos(result)
            console.log(result)
        })
    }, [])

    return (
        <>
            <div className="row justify-content-center mt-3">
                <div className="col-10">
                    <div className="card" style={{ width: "100%" }}>
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <div className="col-3">
                                    <h5 class="card-title">Productos</h5>
                                </div>
                                <div className="col-3">
                                    <Link to="/admin/productos/nuevo"><button class="btn btn-outline-primary">Nuevo producto<BsPlus /></button></Link>
                                </div>
                            </div>
                            {
                                productos.length > 0 ?
                                    <table className="table  table-striped" >
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Precio</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Color</th>
                                                <th scope="col">Categoria</th>
                                                <th scope="col">Marca</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                productos.map(element => {
                                                    return (
                                                        <tr>
                                                            <td>{element.Nombre}</td>
                                                            <td>{element.Precio}</td>
                                                            <td>{element.Cantidad}</td>
                                                            <td>{element.Color}</td>
                                                            <td>{element._categoria.length > 0 ? element._categoria[0].Categoria : ""}</td>
                                                            <td>{element._marca.length > 0 ? element._marca[0].Nombre : ""}</td>
                                                            <td>
                                                                <button type="button" class="btn btn-outline-warning"><BsPencil /></button>
                                                            </td>
                                                            <td>
                                                                <button type="button" class="btn btn-outline-danger"> <BsTrash /> </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table> : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarProductos