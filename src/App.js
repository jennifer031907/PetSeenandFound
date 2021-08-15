import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import Home from './pages/home/home';
import SignIn from './pages/sign-in/sign-in';

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  );
}

export default App;