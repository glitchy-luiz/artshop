import React from 'react'

const Signup = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Registro
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                                    </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                 <button type="submit" className="btn btn-outline-dark w-100 mt-5">Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
