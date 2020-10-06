import React from 'react'
import styles from './Gallery.module.css'
import AppNav from '../AppNav/AppNav'
import { Footer } from '../Footer/Footer'

var $ = require("jquery");

$(function () {
    var selectedclassName = "";
    $(".filter").click(function () {
        selectedclassName = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedclassName).fadeOut().removeclassName('animation');
        setTimeout(function () {
            $("." + selectedclassName).fadeIn().addclassName('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

export const Gallery = () => {
    return (
        <div>
            <AppNav></AppNav>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mb-5">
                    <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="all">Todos</button>
                    <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="1">Perros</button>
                    <button type="button" className="btn btn-outline-black waves-effect filter" data-rel="2">Gatos</button>
                </div>
            </div>

            <div className={styles.gallery} id="gallery">

                <div className="mb-3 pics animation all 1">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Dogs/Dogo1.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 1">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Dogs/Dogo2.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 2">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Cats/cat1.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 1">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Dogs/Dogo3.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 2">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Cats/cat2.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 2">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Cats/cat3.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 1">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Dogs/Dogo4.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>

                <div className="mb-3 pics animation all 2">
                    <div className={styles.imageInfo}>
                        <img className="img-fluid" src="/img/Gallery/Cats/cat4.jpg" alt="Card image cap"></img>
                        <div className={styles.memberInfo}>
                            <h2 className="mb-2 font-weight-light h3 ">Proyecto</h2>
                            <span className="d-block mb-2 text-white-opacity-05 h4">2020</span>
                        </div>
                    </div>
                </div>


            </div>

            <Footer />

        </div>
    )
}