import React from "react";
import {FacebookShareButton, FacebookIcon} from "react-share";
       
export default function SocialMediaButtons({url}) {
       return (
             <FacebookShareButton 
                url={url}
                quote={"Protectora de Animales Domingo Faustino Sarmiento"}
                hashtag="#protectorasarmiento"
                className="m-1"
            >
                 <FacebookIcon size={36} />
              </FacebookShareButton>
       );
}