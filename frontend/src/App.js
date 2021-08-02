import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import UsersIndex from './components/UsersIndex';
import SignUp from './components/Signup';
import Login from './components/Login';
import AuthProvider from './providers/AuthContext';
import { AuthRoute, ProtectedRoute } from './util/routesUtil'

function App() {
  return (
    <div className="App">
      <AuthProvider >
        <NavBar />
        <Route exact path='/'>
          <Home />
        </Route>
        <ProtectedRoute path='/users'>
          <UsersIndex />
        </ProtectedRoute>
        <AuthRoute path='/signup'>
          <SignUp />
        </AuthRoute>
        <AuthRoute path='/login'>
          <Login />
        </AuthRoute>
      </AuthProvider>
      
    </div>
  );
}

export default App;
