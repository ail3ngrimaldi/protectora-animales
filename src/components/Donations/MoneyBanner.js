import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoneyBanner.css";
import Castracion from '../Donations/imgD/Castracion.jpg';
import MercadoPago from '../Donations/imgD/MercadoPago.jpg';
import Insumos from '../Donations/imgD/Insumos.jpg';


export const MoneyBanner = () => {
  return (
    <div>
      <div className="MBannerContainer">
        {/* <img
                        className="Mbannerimg"
                        src="img/55853786_620357515076511_739317193384132608_n.jpg"
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
        <div className="MBannerCard">
          <h4 className="card-title">Donativo monetario</h4>
          <h5 className="card-title"><i class="fas fa-paw" /> No nos suelten las patitas <i class="fas fa-paw" /> </h5>
          <h5 className="card-title">Los aportes económicos son importantes para pagar tratamientos, estudios médicos y honorarios veterinarios, comprar insumos y alimento, financiar
                    castraciónes, imprimir material de difusión entre otros.</h5>
          <h5 className="card-title">Agradecemos las colaboraciones para los Sarmientitos.</h5>
          <h6 className="card-title">Necesitamos tu ayuda. Gracias.</h6>

          <NavLink
            exact
            activeClassName="active"
            to="/MoneyDonations"
            className="nav-item nav-link">
            <button type="button" className="btn btn-primary">¡DONA AQUI!</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}