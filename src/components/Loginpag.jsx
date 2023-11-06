import React from 'react'

const Loginpag = () => {
    return (
        <>
        <div className="form">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>    
                                <button type="submit" className="btn corv btn-outline-dark w-100 mt-5">Confirmar</button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Loginpag
