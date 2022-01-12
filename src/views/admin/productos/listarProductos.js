import React, { useEffect, useState } from "react";
import { getRequest } from "../../../libraries/Functions";
import { BsTrash, BsPencil, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import DTable from "../../../compoents/Table";

const editItem = (_item) => {
    return (
        <Link to={`/admin/productos/${_item.Nombre}`}>
            <button className="btn">
                <BsPencil color="blue" />
            </button>
        </Link>

    )
}

const deleteItem = (_item) => {
    return (
        <button className="btn" onClick={() => { alert(_item.Nombre) }}>
            <BsTrash color="red" />
        </button>
    )
}

const ListarProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        getRequest('/producto').then(result => {
            setProductos(result)
        })
    }, [])

    const headers = [{ name: 'Nombre' }, { name: 'Precio' }, { name: 'Cantidad' }, { name: 'Color' }, { name: 'Categoria' },
    { name: 'Marca' }, { name: 'Editar', component: editItem }, { name: 'Eliminar', component: deleteItem }]

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
                            <DTable headers={headers} data={productos} filter={true} className={"table  table-striped"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarProductos