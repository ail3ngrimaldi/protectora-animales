import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTES
import AppNav from "./components/AppNav/AppNav";
import PetCrud from "./components/PetCRUD/petnavbar";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Store } from "./components/Store/Store";
import { Volunteering } from "./components/Volunteering/Volunteering";
import { Gallery } from "./components/Gallery/Gallery";
import { MoneyDonations } from "./components/Donations/MoneyDonations";
import { SuppliesDonations } from "./components/Donations/SuppliesDonations";
import Adoptions from "./components/Adoptions/Adoptions";
import { Footer } from "./components/Footer/Footer";

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

//prueba backend
import PrivateRoute from "./UI/Components/PrivateRoute";
import Todos from "./UI/Routes/Todos";
//import SignIn from "./UI/Routes/SignIn";
import SignOut from "./UI/Routes/SignOut"
import SignInmail from "./UI/Routes/SignInemail";
import CrearUsuario from "./UI/Routes/CrearUsuario";

class App extends Component {
  render() {
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
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Volunteering" component={Volunteering} />
            <Route exact path="/Store" component={Store} />
            <Route exact path="/Adoptions" component={Adoptions} />
            <Route exact path="/Adoptions/Form/:id" component={Formulario} />
            <Route exact path="/petInfo" component={Info} />
            <Route exact path="/MoneyDonations" component={MoneyDonations} />
            <Route exact path="/SuppliesDonations" component={SuppliesDonations} />

            <Route exact path="/salir" component={SignOut} />
            <Route exact path="/entrar" component={SignInmail} />
            <Route exact path="/crearusuario" component={CrearUsuario} />

            {/* CRUD */}
            <Route exact path="/Admin" component={PetCrud} />
            <Route exact path="/Admin/Createpet" component={CreatePet} />
            <Route exact path="/Admin/ReadPet" component={ReadPet} />
            <Route exact path="/Admin/UpdatePet" component={UpdatePet} />
            <Route exact path="/Admin/DeletePet" component={DeletePet} />

            {/* RESTO DE COSAS */}
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/project/:id" component={ProjectDetails} />

            <Route exact path="/create" component={CreateProject} />
          </Switch>
          <Footer />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
