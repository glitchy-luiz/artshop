import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
        
            <nav variant="danger" className="navbar navbar-expand-lg navbar-light bg-light top navvermelho">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item itemd">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Produtos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Sobre nós</NavLink>
                            </li> */}
                            
                                                       
                            
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold logo" to="/"> <img src="https://cdn.discordapp.com/attachments/940314002444136498/1171093712072360008/1699280425042-Standard.png?ex=655b6d02&is=6548f802&hm=b5e9bd4fbdf1e598930bfa333ca8d51e9b951f5e0b8eae90ba23b6d0c7c74586&" alt="" width={100} height={100} /> </NavLink>
                    {/* <button type="submit" className="btn btn-outline-dark w-40" to="/loginpag">Login</button>
                    <button type="submit" className="btn btn-outline-dark w-40">Registrar</button> */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/loginpag">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cadastropag">Cadastro</NavLink>
                            </li>
                            </ul>
                                        </div>
                </div>
            </nav>
        </>
    )
}

export default Header


