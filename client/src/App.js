import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import CreateProject from './Components/projects/CreateProject'

import { Home } from './Components/Home/Home'
import { Gallery } from './Components/Gallery/Gallery'


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createproject" component={CreateProject} />
            <Route exact path="/Gallery" component={Gallery} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App

/* function mapStateToProps(state){
  return{
      usuario : state.usuario.usuario
  }
}

export default connect (mapStateToProps,{ getUser})( App ) */