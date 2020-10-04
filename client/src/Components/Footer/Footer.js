import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Protectora Sarmiento</h5>
            <p>
              Nuestra protectora rescata, cura y mantiene animales. Nos ocupamos
              de esterilizar y proveer todas las vacunas. Nos sostenemos gracias
              a las cuotas de los socios y al trabajo que aportamos hace años
              los voluntarios.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Redes</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">
                  <i class="fab fa-facebook fa-2x fa-lg"></i>
                </a>
              </li>
              <br></br>
              <li className="list-unstyled">
                <a href="#!">
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
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};
