import Button from 'react-bootstrap/esm/Button';
import './App.css';
import TopBar from './Components/TopBar';
import { UserProvider } from './Components/UserContext';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Pages/Home';
import React from 'react';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <TopBar />
      <Routes basename="/my-app">
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
