import React from 'react'

const Cadastropag = () => {
    return (
        <div className="form">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro</h5>
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
                                 <button type="submit" className="btn btn-outline-dark w-100 mt-5 corv">Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cadastropag
