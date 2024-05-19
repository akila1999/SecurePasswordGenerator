import React from 'react';
import './App.css';
import Form from './components/Form';
import Loginbtn from './components/LoginButton';
import Logoutbtn from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="container">
    <main className="column">
      <h1>Login</h1>
      {isAuthenticated ? (
        <>
        <Logoutbtn/>
        <Form />
        </>
      ):(
      <Loginbtn />
      )}
    </main>
  </div>
  );
}

export default App;
