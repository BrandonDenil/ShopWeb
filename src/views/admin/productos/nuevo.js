import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft, BsUpload } from "react-icons/bs";
import { getRequest } from '../../../libraries/Functions';
import { useDropzone } from 'react-dropzone'

const NuevoProducto = () => {
    const [inputs, setInputs] = useState({})
    const [marcas, setMarcas] = useState([])
    const [categorias, setCategorias] = useState([])

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ acceptedFiles: 'image/*' })

    useEffect(() => {
        getRequest('/marca').then(result => {
            setMarcas(result.data)
        })

        getRequest('/categoria_producto').then(result => {
            setCategorias(result.data)
        })
    }, [])

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path}
            <img src={acceptedFiles[0].mozFullPath} />
        </li>
    ));

    return (<>
        <div className="row justify-content-center mt-3">
            <div className="col-10">
                <div className="card" style={{ width: "100%" }}>
                    <div className="card-body">
                        {/* <div className="row">
                            <div className="col-1">
                                <Link to="/admin/productos"><button class="btn btn-outline-primary"><BsArrowLeft /></button></Link>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-3">
                                <h5 className="card-title"> Nuevo producto</h5>
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
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className=" mb-3 col-6">
                                <label for="Descripción" className="form-label">Detalles técnicos</label>
                                <div className="input-group">
                                    <input type="text" class="form-control" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">Agregar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 col-6">
                                <label for="Descripción" className="form-label">Detalles técnicos agregados</label>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown button
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-column justify-content-center align-items-center" {...getRootProps()} style={styles.dragAndDrop} sm={12}>
                                <p>Arrastre y suelte las imagenes del producto aqui o haga click</p>
                                <input
                                    {...getInputProps()}
                                />
                                {files}
                                <BsUpload size={30} />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary mr-2">Guardar</button>
                        <Link to="/admin/productos"><button class="btn btn-warning">Cancelar</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

const styles = {
    dragAndDrop: { cursos: "move", cursor: "grab", height: "100%", padding: '10px', border: 'solid 1px ', borderStyle: 'dashed ' }
}


export default NuevoProducto