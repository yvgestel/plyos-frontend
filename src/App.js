import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Navbar } from './components/organisms/navbar/Navbar';
import React from 'react';

function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route path="/" exact>
          <h1>Home</h1>
        </Route>
        <Route path="/exercises" exact>
          <h1>Exercises</h1>
        </Route>
        <Route path="/mytraining" exact>
          <h1>MyTraining</h1>
        </Route>  
        <Route path="/blogs">
          <h1>Blogs</h1>
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
        <Router path="/contact">
          <h1>Contact</h1>
        </Router>
      </Switch>

    </Router>

    
  
  );
}

export default App;
