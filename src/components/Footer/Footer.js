import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="Styles">
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center ">
          <MDBRow className="text-left">
            <MDBCol md="6" className="Fonts py-2">
              <h5 className="title">Protectora Sarmiento</h5>
              <p>Asociacion Civil sin fines de lucro</p>
              <p>Personería jurídica 0599 / 70</p>
              <p>Cuit: 30-70152191-5</p>
              <p>Telefono: +54 9 3412 76-9534</p>

              <p>Rosario - Argentina</p>
            </MDBCol>
            <MDBCol md="6" className="Fonts2 text-center ">
              <h5 className="title">Contactanos</h5>
              <br />
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.facebook.com/ProtectoraSarmiento.Rosario/about/?ref=page_internal">
                    <i class="fab fa-facebook fa-2x fa-lg"></i>
                  </a>
                </li>
                <br></br>
                <li className="list-unstyled">
                  <a href="https://www.instagram.com/protectorasarmiento/?hl=es-la">
                    <i class="fab fa-instagram fa-2x fa-lg"></i>
                  </a>
                </li>
                {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid className="Fonts">
            &copy; {new Date().getFullYear()} Copyright:{" "}
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};
