import React from "react";
import { Link} from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const AppNav = (props) => {
  const { auth, profile } = props;
  return (
    <div>
    <Container>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/Logo.png"
            width="201px"
            height="103px"
            alt=""
            loading="lazy"
          />{" "}
        </Link>
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/AboutUs">Historia</Nav.Link>
            <Nav.Link href="/Store">Tienda</Nav.Link>
            <Nav.Link href="/Volunteering">Voluntariado</Nav.Link>
            <Nav.Link href="/Gallery">Mascotas</Nav.Link>
            <NavDropdown title="Donativos">
            <NavDropdown.Item href="/MoneyBanner">Donaciones Monetarias</NavDropdown.Item>
            <NavDropdown.Item href="/SuppliesBanner">Donaciones Insumos</NavDropdown.Item>         
              
            </NavDropdown>
          </Nav>
         
        </Navbar.Collapse>
      </Navbar>

        
          
           
            {/* Nav de login */}

            <Nav2 />
        
        
       
      </nav>
      <br />
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(AppNav)
