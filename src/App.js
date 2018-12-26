import React, { Component } from "react";
import Login from './components/login-signup'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Project from './components/project'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <section>
            <Route exact path="/" component={Login} />
            <Route exact path="/project" component={Project} />
          </section>
      </BrowserRouter>
    );
  }
}

export default App;