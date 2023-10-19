import React, { useEffect } from 'react'; 
import './App.css';
import LoginPage from './pages/Loginpage';
import { useAuth0 } from '@auth0/auth0-react';
import DashBoardPage from './pages/DashBoardPage'

function App() { 
  const {isAuthenticated }=useAuth0();
  useEffect(()=>{},[isAuthenticated])
  return (
    isAuthenticated ? <DashBoardPage/> :  <LoginPage/> 
  );
}

export default App;
