import React, { Component } from "react";
import { AboutUs } from "../AboutUs/AboutUs";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

const links = [
    { href: "AboutUs", text: "Historia" },
    { href: "Store", text: "Tienda" },
    { href: "#voluntary", text: "Voluntariado" },
    { href: "Gallery", text: "Mascotas" },
    { href: "#others2", text: "Otros2", className: "btnadd" },
    { href: "/donations", text: "Donaciones" },
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink href={href} className={className}>
            {text}
        </NavLink>
    </NavItem>
);

export default class AppNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">
                        <img
                            src="/img/logo 1.png"
                            width="60"
                            height="40"
                            alt=""
                            loading="lazy"
                        />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

// export const AppNav = () => {
//     return (
//       <div>
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <img
//             src="/img/logo 1.png"
//             width="60"
//             height="40"
//             alt=""
//             loading="lazy"
//           />

//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>

//           <div class="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul class="navbar-nav mr-auto">
//               <li class="nav-item active">
//                 <a class="nav-link" href="#">
//                   {" "}
//                   Home <span class="sr-only">(current)</span>
//                 </a>
//               </li>

//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   Link
//                 </a>
//               </li>

//               <li class="nav-item dropdown">

//                 <a
//                   class="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-toggle="dropdown"
//                   aria-haspopup="true"
//                   aria-expanded="false"
//                 >
//                   Adopta

//                 </a>

//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">

//                   <a class="dropdown-item" href="#">

//                     Galeria

//                   </a>

//                   <a class="dropdown-item" href="#">

//                     Formulario de Adopcion

//                   </a>

//                   <div class="dropdown-divider"></div>

//                   <a class="dropdown-item" href="#">

//                     Something else here

//                   </a>
//                 </div>
//               </li>

//               <li class="nav-item">

//                 <a class="nav-link" href="#">

//                   Disabled

//                 </a>

//               </li>

//             </ul>

//               <button
//                 class="btn btn-outline-success my-2 my-lg-0 my-2 my-sm-0"
//                 type="submit"
//               >

//                 Donaciones

//               </button>

//           </div>

//         </nav>

//       </div>
//     );

// };