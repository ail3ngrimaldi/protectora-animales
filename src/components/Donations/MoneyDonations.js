import React from 'react'
import { NavLink } from 'react-router-dom';
import "./MoneyDonations.css"

const MoneyDonations = () => {
    return (
        <div>

            <div className="Container">
                <div className="CBUCard border border-warning ml-4">
                    <h4 className="card-header">Depósito o transferencia Bancaria</h4>
                    <div className="card-body">
                        <p className="card-title lead">Cuenta Corriente Especial Banco Municipal</p>
                        <p className="card-text text-muted">(Doná el importe que quieras directamente en nuestra cuenta.) </p>
                        <p className="card-title">CBU 0650020701000000757761</p>
                        <p className="card-title">Cuenta: 757766</p>
                        <p className="card-title">Asociación Civil sin Fines de Lucro</p>
                        <p className="card-title">Personería Jurídica 0599 / 70</p>
                        <p className="card-title">Cuit 30-70152191-5</p>
                    </div>
                </div>
                <div className="CBUCard border border-warning ml-4">
                    <h4 className="card-header">Donación de Insumos</h4>
                    <div className="card-body">
                        {/* <p className="card-subtitle mb-2 text-muted">Card subtitle</p> */}
                        <p className="card-text">Agradecemos las colaboraciones para los Sarmientitos.</p>
                        <NavLink
                            exact
                            activeClassName="active"
                            to="/SuppliesBanner"
                            className="nav-item nav-link">
                            <button type="button" className="btn btn-primary">¡Información!</button>
                        </NavLink>
                    </div>
                </div>

            </div>

            <div className="CardContainer">
                <div className="MPCard">
                    <img
                        className="card-img-top max-width: 5%"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                    ></img>
                    <h5 className="card-title">Doná a través de MERCADOPAGO</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        (Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco y otros.)
                    </h6>
                    <div className="Opcard">
                        <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">$ 100
                        </button>
                        </a>
                    </div>
                    <br></br>
                    <div className="Opcard">
                        <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">$ 200
                        </button>
                        </a>
                    </div>
                    <br></br>
                    <div className="Opcard">
                        <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">$ 300
                        </button>
                        </a>
                    </div>
                    <br></br>
                    <div className="Opcard">
                        <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">$ 400
                        </button>
                        </a>
                    </div>
                    <br></br>
                    <div className="Opcard">
                        <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                            <button type="button"
                                className="btn btn-primary">$ 500
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
                            <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Apadriná 1/2 Castración!
                                </button>
                            </a>
                        </div>
                        <br></br>
                        <div className="Opcard">
                            <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Apadriná 1 Castración!
                                </button>
                            </a>
                        </div>
                        <br></br>
                        <div className="Opcard">
                            <a href="https://mpago.la/2MNYQgd" target="_blank" rel="noopener noreferrer">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button"
                                    className="btn btn-primary">¡Apadriná 2 Castración!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoneyDonations;