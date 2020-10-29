import React from "react";
import { Link } from 'react-router-dom';
import './petnavbar.css'
import ButtonsAdmin from './ButtonsAdmin';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const PetCrud = (props) => {
  return (

    <Container className='p-0 ' fluid={true}>
      <NavBar className='border-bottom' bg='light' expand='lg'>
        <div className="container bg-light d-flex justify-content-center">
          <h1 className='title1 bg-light'>¿Qué vas a hacer hoy?</h1>
        </div>
      </NavBar>
      <ButtonsAdmin handle={props.handle}/>
    </Container>
  );
};

export default PetCrud;