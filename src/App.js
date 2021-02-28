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
import { MyProfile } from './pages/myprofile/MyProfile';
import { SearchPage } from './pages/exercises/search/Search';
import { ExerciseID } from './pages/exercises/id/ExerciseID';
import { Blogs } from './pages/blogs/Blogs';
import { BlogID } from './pages/blogs/id/BlogID';
import { UnknownURL } from './pages/404/404';

import { UserContextProvider } from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
        <Router>
        <Navbar/>

          <div className="page-container">
            <Switch>
              <Route 
                path="/" 
                exact 
                component={Home}
              />
              <Route 
                path="/exercises" 
                exact 
                component={Exercises}
              />
              <Route 
              path="/exercises/search" 
              exact 
              component={SearchPage}
              />
              <Route 
              path="/exercises/:id"  
              component={ExerciseID}
              />
              <PrivateRoute path="/mytraining" exact>
                <MyTraining></MyTraining>
              </PrivateRoute>  
              <Route 
                path="/blogs" 
                exact 
                component={Blogs} 
              />
              <Route 
                path="/blogs/:id" 
                exact 
                component={BlogID} 
              />
              <Route 
                path="/contact" 
                component={Contact}
              />
              <PrivateRoute path="/profile" >
                <MyProfile></MyProfile>
              </PrivateRoute>
              <Route 
                path="/login" 
                component={Login}
              />
              <Route 
                component={UnknownURL}
                path="*"
              />
            </Switch>
          </div>
          
        </Router>
    </UserContextProvider>
    
  );
}

export default App;