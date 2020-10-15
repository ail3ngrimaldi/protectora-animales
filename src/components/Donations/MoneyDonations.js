import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./MoneyDonations.css"

export const MoneyDonations = () => {
    return (
        <div>
            <div className="Container">
                <div className="CBUCard">
                    <h4 class="card-title">Transferencia Bancaria</h4>
                    <h5 class="card-title">Cuenta Corriente Especial Banco Municipal</h5>
                    <h5 class="card-title">CBU 0650020701000000757761</h5>
                    <h5 class="card-title">Cuenta: 757766</h5>
                    <h5 class="card-title">Asociación Civil sin Fines de Lucro</h5>
                    <h6 class="card-title">Personería Jurídica 0599 / 70</h6>
                    <h6 class="card-title">Cuit 30-70152191-5</h6>
                </div>
                <div className="CBUCard">
                    <h4 class="card-title">Donacion de Insumos</h4>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/SuppliesBanner"
                        className="nav-item nav-link">
                        <button type="button" class="btn btn-primary">Informacion!</button>
                    </NavLink>
                </div>
            </div>

            <div className="CardContainer">
                <div className="MPCard">
                    <img
                        class="card-img-top"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                    ></img>
                    <h5 class="card-title">Mercado Pago</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                    </a>     
                </div>
                <div className="MPCard">
                    <img
                        class="card-img-top"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                    ></img>
                    <h5 class="card-title">Mercado Pago 100 $ARG</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                    </a>  
                </div>
                <div className="MPCard">
                    <img
                        class="card-img-top"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                    ></img>
                    <h5 class="card-title">Mercado Pago 200 $ARG</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                    </a>  
                </div>
                <div className="MPCard">
                    <img
                        class="card-img-top"
                        src="/img/mercadopago.png"
                        alt="Card cap"
                    ></img>
                    <h5 class="card-title">Mercado Pago 300 $ARG</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href ="https://mpago.la/2MNYQgd" target="_blank">  {/* LINK AL MERCADO PAGO DE LAUTARO */}
                        <button type="button" 
                            class="btn btn-primary">¡Haz tu donativo AQUI!
                        </button>
                    </a>  
                </div>
            </div>
     
        </div>
    )
}
