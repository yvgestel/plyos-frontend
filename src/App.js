import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { PrivateRoute } from './components/atoms/privateRoute/PrivateRoute';

import { Navbar } from './components/organisms/navbar/Navbar';

import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Contact } from './pages/contact/Contact';
import { Exercises } from './pages/exercises/Exercises';
import { MyTraining } from './pages/mytraining/MyTraining';
import { SearchPage } from './pages/exercises/search/Search';

function App() {
  return (
    <Router>
      <Navbar/>

      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/exercises" exact>
          <Exercises></Exercises>
        </Route>
        <Route path="/exercises/search" exact>
          <SearchPage></SearchPage>
        </Route>
        <PrivateRoute path="/mytraining" exact>
          <MyTraining></MyTraining>
        </PrivateRoute>  
        <Route path="/blogs">
          <h1>Blogs</h1>
        </Route>
        <PrivateRoute path="/profile">
          <h1>Profile</h1>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Router path="/contact">
          <Contact></Contact>
        </Router>
        <Route path="*">
          <h1>404 Page</h1>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
