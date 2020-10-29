import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {
  return (
    <footer className="Styles mt-5">
      <Container color="blue" className="font-small pt-4 mt-4" fluid={true}>
        <Container fluid className="text-center ">
          <Row className="text-left">
            <Col className="Fonts py-2 p-0' md={3} sm={12}">
              <h5 className="title">Protectora Sarmiento</h5>
              <p>Asociacion Civil sin fines de lucro</p>
              <p>Personería jurídica 0599 / 70</p>
              {/* <p>Cuit: 30-70152191-5</p>
              <p>Telefono: +54 9 3412 76-9534</p> */}

              <p>Rosario - Argentina</p>
            </Col>
            <Col className="Fonts2 p-0 d-flex justify-content-end'md={3} ">
              <h5 className="title">Contactanos</h5>
              <br />
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.facebook.com/ProtectoraSarmiento.Rosario/about/?ref=page_internal">
                    <i className="fab fa-facebook fa-2x fa-lg"></i>
                  </a>
                </li>
                <br></br>
                <li className="list-unstyled">
                  <a href="https://www.instagram.com/protectorasarmiento/?hl=es-la">
                    <i className="fab fa-instagram fa-2x fa-lg"></i>
                  </a>
                </li>
                {/* <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li> */}
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright text-center py-3">
          <Container fluid className="Fonts">
            &copy; {new Date().getFullYear()} Copyright:{" "}
          </Container>
        </div>
      </Container>
    </footer>

    // <footer className='mt-5'>
    //         <Container fluid={true}>
    //             <Row className='border-top justify-content-between p-3'>
    //                 <Col className='p-0' md={3} sm={12} >
    //                     Florencia Ramirez
    //                 </Col>
    //                 <Col className='p-0 d-flex justify-content-end'md={3}>
    //                     This site was made by Florencia Ramirez
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </footer>
  );
};
