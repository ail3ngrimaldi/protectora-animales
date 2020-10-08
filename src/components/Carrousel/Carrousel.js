import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Carrousel = () => {
  return (
    <div className="col">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img
            src="https://www.aljazeera.com/wp-content/uploads/2020/04/ecab8c7af42a439d9043b0ade6e1f05b_18.jpeg?fit=999%2C562"
            alt="Card cap"
          />
        </div>
        <div>
          <img
            src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"
            alt="Card cap"
          />
        </div>
        <div>
          <img
            src="https://shopjebo.com/wp-content/uploads/2020/02/1800x1200_cat_relaxing_on_patio_other.jpg"
            alt="Card cap"
          />
        </div>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/5ec67e952aa5c333297be103/1592919018404-4BQ4TFF0545CVNOGURLB/ke17ZwdGBToddI8pDm48kCPWu05VP8ypKjcH-TZGE2x7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTRU7SW6X068OhCa8hcoSzJI0JXaL6-mKFs9CoS6e6GtxGkUFhA8mMphtscgTPYcuA/ICD-cat-980x600.jpg?format=2500w"
            alt="Card cap"
          />
        </div>
        <div>
          <img
            src="https://www.trudellanimalhealth.com/sites/default/files/documents/tmdi-cat-athma-concern_2x.png"
            alt="Card cap"
          />
        </div>
        <div>
          <img
            src="https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/04chinaclone-01-videoSixteenByNineJumbo1600.jpg"
            alt="Card cap"
          />
        </div>
      </Carousel>
    </div>
  );
};
