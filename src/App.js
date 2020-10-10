import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// COMPONENTES
import AppNav from "./components/AppNav/AppNav";
import { Home } from "./components/Home/Home";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Store } from "./components/Store/Store";
import { Volunteering } from "./components/Volunteering/Volunteering";
import { Gallery } from "./components/Gallery/Gallery";
import { Donations } from "./components/Donations/Donations";
import Adoptions from "./components/Adoptions/Adoptions";
import { Footer } from "./components/Footer/Footer";

// RESTO DE COSAS
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
/* import SignIn from "./components/auth/SignIn"; */
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
import Formulario from "./components/Adoptions/Formulario";
import Info from "./components/Info/Info.js";

//prueba back
import PrivateRoute from "./UI/Components/PrivateRoute";
import AppNav2 from "./components/layout/Navbar";
import Todos from "./UI/Routes/Todos";
import SignIn from "./UI/Routes/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <AppNav />
          <AppNav2 />
          <Switch>

          {/* Prueba back */}
          <PrivateRoute path = "/todos">
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
            <Route exact path="/Donations" component={Donations} />
            
            <Route exact path="/Crear" component={SignUp} />



            {/* RESTO DE COSAS */}
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/create" component={CreateProject} />
          </Switch>
          <Footer />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
