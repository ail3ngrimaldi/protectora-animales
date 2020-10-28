import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { db, app } from './index'
import "./App.css"

// COMPONENTES
import AppNav from "./components/AppNav/AppNav";
import PetCrud from "./components/Administrator/petnavbar";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Volunteering } from "./components/Volunteering/Volunteering";
import { Gallery } from "./components/Gallery/Gallery";
import { MoneyDonations } from "./components/Donations/MoneyDonations";
import { Supplies } from "./components/Donations/SuppliesDonations";
import Adoptions from "./components/Adoptions/Adoptions";
import { Footer } from "./components/Footer/Footer";
import { SuppliesBanner } from './components/Donations/SuppliesBanner'
import { MoneyBanner } from './components/Donations/MoneyBanner'
import Petimage from './components/Gallery/Petimage'
import UsuariosAdmin from './components/Administrator/Tablas/UsuariosAdmin';
import MascotasAdmin from './components/Administrator/Tablas/AnimalAdmin';
import VoluntariosAdmin from './components/Administrator/Tablas/VoluntariosAdmin';
import PetDetail from './components/Info/PetDetail'

//CRUD

import { CreatePet } from "./components/PetCRUD/createpet"
import { ReadPet } from "./components/PetCRUD/readpet"
import { UpdatePet } from "./components/PetCRUD/updatepet"
import { DeletePet } from "./components/PetCRUD/deletepet"

// RESTO DE COSAS
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
/* import SignIn from "./components/auth/SignIn"; */

import CreateProject from "./components/projects/CreateProject";
import Formulario from "./components/Adoptions/Formulario";
import Info from "./components/Info/Info.js";
import CardPet from "./components/Info/CardPet.js";

//prueba backend
import PrivateRoute from "./UI/Components/PrivateRoute";
import Todos from "./UI/Routes/Todos";
//import SignIn from "./UI/Routes/SignIn";
import SignOut from "./UI/Routes/SignOut"
import SignInmail from "./UI/Routes/SignInemail";
import CrearUsuario from "./UI/Routes/CrearUsuario";
import NotFound from './components/404/Notfound'

import Test from './components/Gallery/test'
import FileUpload from './components/Gallery/FileUpload'
import Agregarpet from './components/Gallery/Agregarpet'
// import PetId from './components/Info/PetId'
import UserProfile from './components/Users/UserProfile'
import EditProfile from './components/Users/EditProfile'
import ResetPassword from './UI/Routes/ResetPassword.jsx'
// import ModalDetalleMascota from "./components/Info/ModalDetalleMascota";

function App() {
  const [albums, setAlbums] = useState([]);  
  const [booleano, setBooleano] = useState(false);

    const handleclick = () => {
        if (!booleano) {
            setBooleano(true)
            console.log("TRUE", booleano);
        } else {
            setBooleano(false)
            console.log("FALSE", booleano);
        }
    }

  useEffect(() => {
    const unmount = db.collection("pet").onSnapshot((snapshot) => {
      const tempAlbums = [];
      snapshot.forEach((doc) => {
        tempAlbums.push({ ...doc.data(), id: doc.name });
      });
      setAlbums(tempAlbums);
    });
    setBooleano(true)
    return unmount;
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <AppNav />
        <Switch>

          {/* Prueba back */}
          <PrivateRoute path="/todos">
            <Todos />
          </PrivateRoute>

          {/* COMPONENTES */}
          <Route exact path="/" render={() => <Home bool={booleano} />} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/Gallery" component={Petimage} />
          <Route exact path="/Volunteering" component={Volunteering} />
          <Route exact path="/Adoptions" component={Adoptions} />
          <Route exact path="/Adoptions/Form/:id" component={Formulario} />
          <Route exact path="/petInfo/:id" component={Info} />
          <Route exact path="/MoneyDonations" component={MoneyDonations} />
          <Route exact path="/MoneyBanner" component={MoneyBanner} />
          {/* <Route exact path="/Modal" component={ModalDetalleMascota} /> */}
          <Route exact path="/pet/:id" component={PetDetail} />

          <Route exact path="/SuppliesDonations" component={Supplies} />

          <Route exact path="/SuppliesBanner" component={SuppliesBanner} />


          <Route exact path="/salir" component={SignOut} />
          <Route exact path="/entrar" component={SignInmail} />
          <Route exact path="/crearusuario" component={CrearUsuario} />

          {/* CRUD */}
          <Route exact path="/Admin" render={() => <PetCrud handle={handleclick} />} />
          <Route exact path="/Admin/Usuarios" component={UsuariosAdmin} />
          <Route exact path="/Admin/Mascotas" component={MascotasAdmin} />
          <Route exact path="/Admin/Createpet" component={CreatePet} />
          <Route exact path="/Admin/ReadPet" component={ReadPet} />
          <Route exact path="/Admin/UpdatePet" component={UpdatePet} />
          <Route exact path="/Admin/DeletePet" component={DeletePet} />
          <Route exact path="/Admin/Voluntarios" component={VoluntariosAdmin} />

          {/* RESTO DE COSAS */}
          <Route exact path="/dash" component={Dashboard} />
          <Route exact path="/project/:id" component={ProjectDetails} />
          <Route exact path="/resetpassword" component={ResetPassword} />

          <Route exact path="/create" component={CreateProject} />

          <Route exact path="/test" component={Test} />
          <Route exact path="/up" component={FileUpload} />
          <Route exact path="/agregarpet" component={Agregarpet} />
          {/* <Route exact path="/pet/:id" component={PetId} /> */}
          <Route exact path="/MiPerfil" component={UserProfile} />
          <Route exact path="/EditarPerfil" component={EditProfile} />
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </div>
    </BrowserRouter>
  );
}



export default App;
