import React from 'react'
import { NavLink } from 'react-router-dom';
import "./MoneyDonations.css"

export const MoneyDonations = () => {
    return (
        <div>

            <div className="Container">
                <div className="CBUCard">
                    <h4 className="card-title">Depósito o transferencia Bancaria</h4>
                    <h6 className="card-subtitle mb-2 text-muted">(Doná el importe que quieras directamente en nuestra cuenta.)</h6>
                    <h5 className="card-title">Cuenta Corriente Especial Banco Municipal</h5>
                    <h5 className="card-title">CBU 0650020701000000757761</h5>
                    <h5 className="card-title">Cuenta: 757766</h5>
                    <h5 className="card-title">Asociación Civil sin Fines de Lucro</h5>
                    <h6 className="card-title">Personería Jurídica 0599 / 70</h6>
                    <h6 className="card-title">Cuit 30-70152191-5</h6>
                </div>
                <div className="CBUCard">
                    <h4 className="card-title">Donacion de Insumos</h4>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <NavLink
                        exact
                        activeClassName="active"
                        to="/SuppliesBanner"
                        className="nav-item nav-link">
                        <button type="button" className="btn btn-primary">Informacion!</button>
                    </NavLink>
                </div>
            </div>
            
            </div>

            <div className="CardContainer">
                <div className="MPCard">
                    <img
                        className="card-img-top"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                        
                    
                    ></img>
                    <h5 className="card-title">Doná a través de MERCADOPAGO</h5>
                    <h6 className="card-subtitle mb-2 text-muted">(Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco y otros.)</h6>

                    <div className="Opcard">
                        <h5 className="card-title">Dona a través de MERCADOPAGO</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>

                    <div className="Opcard">
                        <h5 className="card-title">Dona 100 $ARG</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>

                    <div className="Opcard">
                        <h5 className="card-title">Dona 200 $ARG</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>

                    <div className="Opcard">
                        <h5 className="card-title">Dona 300 $ARG</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>

                    <div className="Opcard">
                        <h5 className="card-title">Dona 400 $ARG</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>

                    <div className="Opcard">
                        <h5 className="card-title">Dona 500 $ARG</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                        </a>
                    </div>
                </div>

                <div className="Opcard">
                    <h5 className="card-title">Dona 500 $ARG</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            className="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                    </a>
                </div> 
            </div>

                <div className="CardContainer">
                    <div className="MPCard">
                        <img
                            className="card-img-top"
                            src="/img/mercadopago.png"
                            alt="Card cap"
                        ></img>
                        <h5 className="card-title">Apadriná Castraciones con MERCADOPAGO</h5>
                        <h6 className="card-subtitle mb-2 text-muted">(Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco y otros.)</h6>

                        <div className="Opcard">
                            <h5 className="card-title">Apadriná 1/2 Castración</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Haz tu donativo AQUI!
                                </button>
                            </a>
                        </div>

                        <div className="Opcard">
                            <h5 className="card-title">Apadriná 1 Castración</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Haz tu donativo AQUI!
                                </button>
                            </a>
                        </div>

                        <div className="Opcard">
                            <h5 className="card-title">Apadriná 2 Castración</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <a href="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Haz tu donativo AQUI!
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
