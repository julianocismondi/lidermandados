import React, {useContext, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Todos from './Components/Todos';
import Admin from './Components/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import PublicRoute from './hocs/PublicRoute';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import IndexClient from './Components/client/IndexClient';

function App() {
  
        return (             
            <Router>
            <Navbar/>
            <Route exact path ="/" component = { Home }></Route>
            <PublicRoute path="/login" component = { Login }></PublicRoute>
            <PublicRoute path="/register" component = { Register }></PublicRoute>
            <PrivateRoute path="/todos" roles= {[ "operator", "administrator" ]} component={ Todos }></PrivateRoute>
            <PrivateRoute path="/admin" roles= {[ "administrator" ]} component={ Admin }></PrivateRoute>
            <PrivateRoute path="/client" roles = {[ "operator", "administrator" ]} component = { IndexClient }></PrivateRoute>
          </Router> 
        );
  }

export default App;
