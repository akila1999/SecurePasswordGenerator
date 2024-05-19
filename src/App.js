import React from 'react';
import './App.css';
import Form from './components/Form';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="container">
    <main className="column">
      <h1>Auth0 Login</h1>
      {isAuthenticated ? (
        <>
        <LogoutButton/>
        <Form />
        </>
      ):(
      <LoginButton />
      )}
    </main>
  </div>
  );
}

export default App;