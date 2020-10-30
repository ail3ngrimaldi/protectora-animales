import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./MoneyDonations.css"

export const MoneyDonations = () => {
    return (
        <div>

            <div className="Container">
            <div class="CBUCard border border-warning ml-4">
                <h4 class="card-header">Depósito o transferencia Bancaria</h4>
                <div class="card-body">
                    <p class="card-title lead">Cuenta Corriente Especial Banco Municipal</p>
                    <p class="card-text text-muted">(Doná el importe que quieras directamente en nuestra cuenta.) </p>
                    <p class="card-title">CBU 0650020701000000757761</p>
                    <p class="card-title">Cuenta: 757766</p>
                    <p class="card-title">Asociación Civil sin Fines de Lucro</p>
                    <p class="card-title">Personería Jurídica 0599 / 70</p>
                    <p class="card-title">Cuit 30-70152191-5</p>
                    
                </div>
            </div>
            <div class="CBUCard border border-warning ml-4">
                <h4 class="card-header">Donación de Insumos</h4>
                <div class="card-body">
                    {/* <p class="card-subtitle mb-2 text-muted">Card subtitle</p> */}
                    <p class="card-text">Agradecemos las colaboraciones para los Sarmientitos.</p>
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/SuppliesBanner"
                        className="nav-item nav-link">
                        <button type="button" class="btn btn-primary">¡Información!</button>
                    </NavLink>
                </div>
            </div>
            
            </div>

            <div className="CardContainer">
                <div className="MPCard">
                    <img
                        class="card-img-top max-width: 5%"
                        src="/img/mercadopago.png"
                        alt="Card cap"                    
                    ></img>
                    <h5 class="card-title">Doná a través de MERCADOPAGO</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        (Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco y otros.)
                    </h6>               
                <div className="Opcard">                    
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button"
                            class="btn btn-primary">Botón para donar $ 100
                        </button>
                    </a>
                </div> 
                <br></br>
                <div className="Opcard">                    
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">Botón para donar $ 200
                        </button>
                    </a>
                </div> 
                <br></br>
                <div className="Opcard">                    
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">Botón para donar $ 300
                        </button>
                    </a>
                </div> 
                <br></br>
                <div className="Opcard">                    
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">Botón para donar $ 400
                     </button>
                    </a>
                </div>
                <br></br>
                <div className="Opcard">                    
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">Botón para donar $ 500
                        </button>
                    </a>
                </div> 
                
            </div>
                
            <div className="CardContainer">
            <div className="MPCard">
                <img
                    class="card-img-top"
                    src="/img/mercadopago.png"
                    alt="Card cap"
                ></img>
                <h5 class="card-title">Apadriná Castraciones con MERCADOPAGO</h5>
                <h6 class="card-subtitle mb-2 text-muted">(Todas las tarjetas de crédito y débito, Pago Fácil, Rapipago, Link, Banelco y otros.)</h6>
                
                        <div className="Opcard">                           
                            <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button" 
                                    class="btn btn-primary">¡1/2 Castración!
                                </button>
                            </a>
                        </div> 
                        <br></br>
                        <div className="Opcard">                            
                            <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button" 
                                    class="btn btn-primary">¡1 Castración!
                                </button>
                            </a>
                        </div> 
                        <br></br>
                        <div className="Opcard">                            
                            <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                                <button type="button" 
                                    class="btn btn-primary">¡2 Castraciones!
                                </button>
                            </a>
                        </div> 

                    </div>
                </div>
            </div>
        </div>
    )
}
