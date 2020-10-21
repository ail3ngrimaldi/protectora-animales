import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from "react-responsive-carousel";
import Foto1 from "../Carrousel/img/Foto1.jpg";
import Foto2 from "../Carrousel/img/Foto2.jpg";
import Foto3 from "../Carrousel/img/Foto3.png";
import Foto4 from "../Carrousel/img/Foto4.jpg";
import Foto5 from "../Carrousel/img/Foto5.png";
import Foto6 from "../Carrousel/img/Foto6.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carrousel2.css";


export const Carrousel2 = () => {
    return (
        <div className="carrusel">
            <div className="StyleCarouselOpacity">

                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                    style={{ height: '30vmax' }}
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
                        <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Foto1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Foto2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Foto3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Foto4} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Foto5} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Foto6} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

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

            </div>
        </div>
    );
};
