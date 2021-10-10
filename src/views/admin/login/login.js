import React from "react";

const AdminLogin = () => {
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", backgroundColor: "#ecf0f1", width: "100vw" }}>
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title">Login</h5>

                    <div className="row">
                        <div className="col">
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div class="input-group mb-3">
                                <button type="button" className="btn btn-primary">Inicio de sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin

