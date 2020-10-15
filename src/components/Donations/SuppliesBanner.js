import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Foto1 from "../Donations/imgD2/Foto1.jpg";
import Foto2 from "../Donations/imgD2/Foto2.jpg";
import Foto3 from "../Donations/imgD2/Foto3.jpg";
import Foto4 from "../Donations/imgD2/Foto4.jpg";
import Foto5 from "../Donations/imgD2/Foto5.jpg";
import Foto6 from "../Donations/imgD2/Foto6.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import "./SuppliesBanner.css"

export const SuppliesBanner = () => {
    return (
        <div>
            <div className="SBannerContainer">
                {/* <img
                        class="Sbannerimg"
                        src="/img/Captura.PNG"
                        alt="Card cap"
                        
                ></img> */}
                <Container fluid className="StyleCarousel">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Foto1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Foto2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Foto3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
              
            </div>
            <div className="carousel-item">
              <img src={Foto4} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
              
            </div>
            <div className="carousel-item">
              <img src={Foto5} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
              
            </div>
            <div className="carousel-item">
              <img src={Foto6} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                
                <p>Protectora Sarmiento</p>
              </div>
              
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Container>
                <div className="SBannerCard">
                    <h4 class="card-title">Donativo Insumos</h4>
                    <h5 class="card-title">Informacion</h5>
                    <h5 class="card-title">Mensaje lindo</h5>
                    <h6 class="card-title">Agradecimientos</h6>
                 
                    <NavLink
                        exact
                        activeClassName="active"
                        to="/SuppliesDonations"
                        className="nav-item nav-link">
                        <button type="button" class="btn btn-primary">Dona aqui!</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
