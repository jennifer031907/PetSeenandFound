import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';
import SignUp from './pages/sign-up/sign-up';
import Pets from './pages/pets/pets';
import AddPet from './pages/pets/add-pet';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/pets" exact>
          <Pets />
        </Route>
        <Route path="/pets/add" exact>
          <AddPet />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
