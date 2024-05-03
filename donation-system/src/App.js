import './App.css'; import TopBar from './Components/TopBar';
import { UserProvider } from './Components/UserContext';
import {Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import RegistrationType from './Pages/RegistrationType';
import DonorDashboard from './Pages/Donor/DonorDashboard';
import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminProfile from './Pages/Admin/AdminProfile';
import { SideBarProvider } from './Components/SideBarContext';
import OrganizationRegistration from './Pages/Organization/OrgRegistration';
import DonorRegistration from './Pages/Donor/DonorRegistration';


function App() {
  return (
    <div className="App">
      <UserProvider>
        <SideBarProvider>
          <TopBar />
          <Routes basename="/my-app">
            <Route path='/' element={<Home />}></Route>``
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/RegistrationType' element={<RegistrationType />}></Route>
            
            
            <Route path='/Home' element={<Home />}></Route>


           
            <Route path = '/OrganizationRegistration' element={<OrganizationRegistration/>}></Route>
            
            
            <Route path = '/DonorRegistration' element={<DonorRegistration/>}></Route>

            <Route path='/Donor' element={<DonorDashboard />}></Route>
            <Route path='/Admin' element={<AdminDashboard />}></Route>
            <Route path='/AdminProfile' element={<AdminProfile />}></Route>
          </Routes>
        </SideBarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
