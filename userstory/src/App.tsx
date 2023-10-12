import React from 'react'; 
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UsersPage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} > 
        </Route>
        <Route path='/users' element={<UserPage/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
