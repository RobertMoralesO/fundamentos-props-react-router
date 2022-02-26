import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Contacto from "./components/Contacto";
import Tribus from "./components/Tribus";
import Inicio from "./components/Inicio";
import Tribu from "./components/Tribu";

function App() {
  
  return (
    <Router>
      <div className="container mt-5">
      <div className="btn-group">
        <NavLink to="/" className="btn btn-dark" activeClassName="active">
          Inicio
        </NavLink>
        <Link to="/tribus" className="btn btn-dark">
          Tribus
        </Link>
        <Link to="/contacto" className="btn btn-dark">
          Contacto
        </Link>
      </div>
      <hr/>
      <Switch>
      <Route path="/tribus/:id">
          <Tribu/>
        </Route>
        <Route path="/contacto">
          <Contacto/>
        </Route>
        <Route path="/tribus">
          <Tribus/>
        </Route>
        <Route path="/">
          <Inicio/>
        </Route>
      </Switch>
      </div>

    </Router>
    
  );
}

export default App;
