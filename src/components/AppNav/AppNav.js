  
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav2 from './Navbarlogin'
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppNav = (props) => {
  const { auth, profile } = props;
  return (

    <Container className='p-0' fluid={true}>
    <NavBar className='border-bottom' bg='light' expand='lg'>
      <NavBar.Brand href="#home">
      <Link className="navbar-brand" to="/">
        <img  src="/img/Logo.png"
            width="201px"
            height="103px"
            alt=""
            loading="lazy"
        /> {" "} </Link>
      </NavBar.Brand>
      
      <NavBar.Toggle className='border-0' aria-controls='navbar-toggle' />
      <NavBar.Collapse id='navbar-toggle'>
        <Nav className='ml-auto'>
          <Link className='nav-link' to='/AboutUs'>Historia</Link>
          <Link className='nav-link' to='/Volunteering'>Voluntariado</Link>
          <Link className='nav-link' to='/Gallery'>Mascotas</Link>
          
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Donativos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink
                  exact
                  activeClassName="active"
                  to="/MoneyBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Monetario{" "}
                </NavLink>
                <NavLink
                  exact
                  activeClassName="active"
                  to="/SuppliesBanner"
                  className="nav-item nav-link"
                >
                  {" "}
                Donaciones Insumos{" "}
                </NavLink>
              </div>
            </li>
            {profile.isAdmin === true && 
            <Link className='nav-link' to='/Admin'>Admin</Link>}
        
        </Nav>

    <Nav2/>
      </NavBar.Collapse>
    </NavBar>


   


  </Container>
    // <div>
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <Link className="navbar-brand" to="/">
    //       <img
    //         src="/img/Logo.png"
    //         width="201px"
    //         height="103px"
    //         alt=""
    //         loading="lazy"
    //       />{" "}
    //     </Link> 
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
    //             to="/AboutUs"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Historia{" "}
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Volunteering"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Voluntariado{" "}
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Gallery"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Mascotas{" "}
    //           </NavLink>
    //         </li> 
    //         <li className="nav-item dropdown">
    //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Donativos
    //           </a>
    //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <NavLink
    //               exact
    //               activeClassName="active"
    //               to="/MoneyBanner"
    //               className="nav-item nav-link"
    //             >
    //               {" "}
    //             Donaciones Monetario{" "}
    //             </NavLink>
    //             <NavLink
    //               exact
    //               activeClassName="active"
    //               to="/SuppliesBanner"
    //               className="nav-item nav-link"
    //             >
    //               {" "}
    //             Donaciones Insumos{" "}
    //             </NavLink>
    //           </div>
    //         </li>
    //         <li className="nav-item">
    //         {profile.isAdmin === true &&  <NavLink
    //             exact
    //             activeClassName="active"
    //             to="/Admin"
    //             className="nav-item nav-link"
    //           >
    //             {" "}
    //             Admin{" "}
    //           </NavLink> }               
    //         </li>
    //         {/* Nav de login */}

    //         <Nav2 />
    //       </ul>
    //       <br />
    //     </div>
    //   </nav>
    //   <br />
    // </div> 
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