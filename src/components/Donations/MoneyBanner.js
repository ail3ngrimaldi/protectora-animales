import React from 'react'
import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Foto1 from "../Donations/imgD/Foto1.png";
import Foto2 from "../Donations/imgD/Foto2.png";
import Foto3 from "../Donations/imgD/Foto3.jpg";
import Foto4 from "../Donations/imgD/Foto4.jpg";
import Foto5 from "../Donations/imgD/Foto5.jpg";
import Foto6 from "../Donations/imgD/Foto6.png";
import "bootstrap/dist/css/bootstrap.min.css";
//import "./Carrousel.css";
import { Container } from "reactstrap";
import "./MoneyBanner.css";
import Castracion from '../Donations/imgD/Castracion.jpg';
import MercadoPago from '../Donations/imgD/MercadoPago.jpg';


export const MoneyBanner = () => {
    return (

      <div>
        <a href="/MoneyDonations">
        <img 
        src={Castracion}
        alt='castracion'
        className='w-75 pt-5 pb-3 mx-auto d-block'
        />
        </a>
        <a href="/MoneyDonations">
        <img 
        src={MercadoPago}
        alt='mercadoPago'
        className='w-75 pt-3 mx-auto d-block'
        />
        </a>
        
      </div>
      //   <div>
      //       <div className="MBannerContainer">
      //           {/* <img
      //                   class="Mbannerimg"
      //                   src="img/55853786_620357515076511_739317193384132608_n.jpg"
      //                   alt="Card cap"
                        
      //           ></img> */}
      //           <Container fluid className="StyleCarousel">
      //   <div
      //     id="carouselExampleCaptions"
      //     className="carousel slide"
      //     data-ride="carousel"
      //   >
      //     <ol className="carousel-indicators">
      //       <li
      //         data-target="#carouselExampleCaptions"
      //         data-slide-to="0"
      //         className="active"
      //       ></li>
      //       <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      //       <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      //       <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      //     </ol>
      //     <div className="carousel-inner">
      //       <div className="carousel-item active">
      //         <img src={Foto1} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
      //       </div>
      //       <div className="carousel-item">
      //         <img src={Foto2} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
      //       </div>
      //       <div className="carousel-item">
      //         <img src={Foto3} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
              
      //       </div>
      //       <div className="carousel-item">
      //         <img src={Foto4} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
              
      //       </div>
      //       <div className="carousel-item">
      //         <img src={Foto5} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
              
      //       </div>
      //       <div className="carousel-item">
      //         <img src={Foto6} className="d-block w-100" alt="..." />
      //         <div className="carousel-caption d-none d-md-block">
                
      //           <p>Protectora Sarmiento</p>
      //         </div>
              
      //       </div>
      //     </div>
      //     <a
      //       className="carousel-control-prev"
      //       href="#carouselExampleCaptions"
      //       role="button"
      //       data-slide="prev"
      //     >
      //       <span
      //         className="carousel-control-prev-icon"
      //         aria-hidden="true"
      //       ></span>
      //       <span className="sr-only">Previous</span>
      //     </a>
      //     <a
      //       className="carousel-control-next"
      //       href="#carouselExampleCaptions"
      //       role="button"
      //       data-slide="next"
      //     >
      //       <span
      //         className="carousel-control-next-icon"
      //         aria-hidden="true"
      //       ></span>
      //       <span className="sr-only">Next</span>
      //     </a>
      //   </div>
      // </Container>
      //           <div className="MBannerCard">
      //               <h4 class="card-title">Donativo monetario</h4>
      //               <h5 class="card-title">🐾 No nos suelten las patitas 🐾 </h5>
      //               <h5 class="card-title">Los aportes económicos son importantes para pagar tratamientos, estudios médicos y honorarios veterinarios, comprar insumos y alimento, financiar 
      //               castraciónes, imprimir material de difusión entre otros.</h5>
      //               <h5 class="card-title">Agradecemos las colaboraciones para los Sarmientitos.</h5>
      //               <h6 class="card-title">Necesitamos tu ayuda. Gracias.</h6>
                 
      //               <NavLink
      //                   exact
      //                   activeClassName="active"
      //                   to="/MoneyDonations"
      //                   className="nav-item nav-link">
      //                   <button type="button" class="btn btn-primary">¡DONA AQUI!</button>
      //               </NavLink>
      //           </div>
      //       </div>
      //   </div>
    )
}