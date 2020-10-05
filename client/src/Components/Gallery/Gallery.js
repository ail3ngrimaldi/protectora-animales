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
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/118366857_3397754043610795_3054042406706974015_o.jpg?_nc_cat=100&_nc_sid=cdbe9c&_nc_ohc=GxXaFwzSV2wAX9AWq_s&_nc_ht=scontent.fbog15-1.fna&oh=482f16c00c6cfc81b4bf0aa26a0ee2d3&oe=5FA0A14D" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/118407190_3388632894522910_3674412495062064310_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=ZRB6sO0S1a0AX_6VWTb&_nc_ht=scontent.fbog15-1.fna&oh=36e26151cad01bfa632e3e4c7b72c242&oe=5FA1E197" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/120908266_10223871951615397_2854480925211038022_o.jpg?_nc_cat=101&_nc_sid=825194&_nc_ohc=klA8jsDsnP4AX_n9mPT&_nc_ht=scontent.fbog15-1.fna&oh=83ac1677d303c1eab8951799b061aa6b&oe=5FA0272C" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 1">
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/119116013_3438541419532057_2626706969120278983_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_ohc=e3atEOXOivIAX_fOAxX&_nc_ht=scontent.fbog15-1.fna&oh=5674c292303be4483bce9ecce71dc2dc&oe=5FA24D6A" alt="Card image cap"></img>
                </div>

                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/120591328_10215245780811476_2462739221872725030_n.jpg?_nc_cat=110&_nc_sid=b9115d&_nc_ohc=R2mpj7pWr6gAX8WM6Nq&_nc_ht=scontent.fbog15-1.fna&oh=45529e96b07d75dc4abdb0bb009c175d&oe=5F9FDE83" alt="Card image cap"></img>
                </div>


                <div class="mb-3 pics animation all 2">
                    <img class="img-fluid" src="https://scontent.fbog15-1.fna.fbcdn.net/v/t1.0-9/120472773_10215245777851402_7450073412417708718_n.jpg?_nc_cat=108&_nc_sid=b9115d&_nc_ohc=2x_Pcucgft0AX99YuN2&_nc_ht=scontent.fbog15-1.fna&oh=c84cb6f55ce3b65f4e48a428dff99c10&oe=5FA023CE" alt="Card image cap"></img>
                </div>

            </div>

            <Footer/>

        </div>
    )
}
