import React from 'react'
import './Gallery.css'
import AppNav from '../AppNav/AppNav'
import {Footer} from '../Footer/Footer'

var $ = require("jquery");

$(function () {
    var selectedClass = "";
    $(".filter").click(function () {
        selectedClass = $(this).attr("data-rel");
        $("#gallery").fadeTo(100, 0.1);
        $("#gallery div").not("." + selectedClass).fadeOut().removeClass('animation');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('animation');
            $("#gallery").fadeTo(300, 1);
        }, 300);
    });
});

export const Gallery = () => {
    return (
        <div>
            <AppNav></AppNav>

            <div class="row">


                <div class="col-md-12 d-flex justify-content-center mb-5">

                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">Todos</button>
                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Perros</button>
                    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Gatos</button>

                </div>


            </div>

            <div class="gallery" id="gallery">

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="/img/Gallery/Dogs/Dogo1.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="/img/Gallery/Dogs/Dogo2.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="/img/Gallery/Cats/cat1.jpg" alt="Card image cap"></img>
                </div>
            
                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="/img/Gallery/Dogs/Dogo3.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="/img/Gallery/Cats/cat2.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="/img/Gallery/Cats/cat3.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="/img/Gallery/Dogs/Dogo4.jpg" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="/img/Gallery/Cats/cat4.jpg" alt="Card image cap"></img>
                </div>

            </div>

            <Footer/>

        </div>
    )
}
