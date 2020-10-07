import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import { Home } from './components/Home/Home'
import { Gallery } from './components/Gallery/Gallery'
import Adoptions from './components/Adoptions/Adoptions'
import Formulario from './components/Adoptions/Formulario'
import { Store } from './components/Store/Store'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/dash' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/Gallery' component={Gallery} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
            <Route exact path='/Adoptions' component={Adoptions} />
            <Route exact path='/Adoptions/Form/:id' component={Formulario} />
            <Route exact path="/Store" component={Store} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
