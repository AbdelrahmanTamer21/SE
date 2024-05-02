import './App.css';import TopBar from './Components/TopBar';
import { UserProvider } from './Components/UserContext';
import {Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Registeration from './Pages/Donor/Registeraion';
import DonorDashboard from './Pages/Donor/DonorDashboard';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminProfile from './Pages/Admin/AdminProfile'; 


function App() {
  return (
    <div className="App">
      <UserProvider>
      <TopBar />
      <Routes basename="/my-app">
      <Route path='/' element={<Home/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Registeration' element={<Registeration />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Donor' element={<DonorDashboard />}></Route>
        <Route path='/Admin' element={<AdminDashboard />}></Route>
        <Route path='/AdminProfile' element={<AdminProfile />}></Route>
      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
