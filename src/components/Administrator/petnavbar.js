import React from "react";
import { Link } from 'react-router-dom';
import './petnavbar.css'
import ButtonsAdmin from './ButtonsAdmin';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const PetCrud = () => {
  return (

    <Container className='p-0 ' fluid={true}>
            <NavBar className='border-bottom' bg='light' expand='lg'>
            <div className="container bg-light d-flex justify-content-center">
            <h1 className='title1 bg-light'>¿Qué vas a hacer hoy?</h1>
            </div>
              <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
              <NavBar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  {/* <Link className='nav-link' to='/Admin/Createpet'>{" "}
                    Crear{" "}
                  </Link> */}
                  <Link className='nav-link' to='/about'>
                  {" "}
                  Actualizar{" "}
                  </Link>
              
                
                                  </Nav>
              </NavBar.Collapse>
            </NavBar>

            <ButtonsAdmin/>
          

          </Container>


    // <div className='divPrincipal'>
    //   <nav className="navbar navbar-expand-lg  navbar-light bg-light">
    //     <div className="container bg-light d-flex justify-content-center">
    //     <h1 className='title1 bg-light'>¿Qué vas a hacer hoy?</h1>
    //     </div>

    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Admin/Createpet"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Crear{" "}
    //           </NavLink>
    //         </li>
    //         {/* <li class="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Admin/ReadPet"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Leer{" "}
    //           </NavLink>
    //         </li> */}
    //         <li class="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/npmtest"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Actualizar{" "}
    //           </NavLink>
    //         </li>
    //         {/* <li class="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Admin/DeletePet"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Borrar{" "}
    //           </NavLink>
    //         </li> */}
    //       </ul>
    //       <br />
    //     </div>
    //   </nav>
    //   <br />
    //   <ButtonsAdmin/>
    // </div>
  );
};

export default PetCrud;