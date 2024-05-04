import './App.css';

import { UserProvider } from './Components/UserContext';
import TopBar from './Components/TopBar';
import { SideBarProvider } from './Components/SideBarContext';

import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import RegistrationType from './Pages/RegistrationType';
import DonationForm from './Pages/Organization/DonationPosts';
import OrganizationRegistration from './Pages/Organization/OrgRegistration';

import DonorPage from './Pages/Donor/Donor';
import DonorDashboard from './Pages/Donor/DonorDashboard';
import DonorRegistration from './Pages/Donor/DonorRegistration';
import ViewDonationRequests from './Pages/Donor/ViewDonationRequest';

import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminProfile from './Pages/Admin/AdminProfile';
import DonorsList from './Pages/Admin/DonorsList';
import OrganizationList from './Pages/Admin/OrganizationList';
import DonorsInfo from './Pages/Admin/DonorsInfo';
import OrganizationInfo from './Pages/Admin/OrganizationInfo';
import { HomeTab , DonationsTab , ContactTab } from './Pages/Admin/OrganizationInfo';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SideBarProvider>
          <TopBar />
          <Routes basename="/my-app">
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/RegistrationType' element={<RegistrationType />}></Route>


            <Route path='/Home' element={<Home />}></Route>

            <Route path='/OrganizationRegistration' element={<OrganizationRegistration />}></Route>

            <Route path='/DonorRegistration' element={<DonorRegistration />}></Route>

            <Route path='/Donor' element={<DonorPage />}>
              <Route path='' element={<DonorDashboard />}></Route>
              <Route path='DonationRequests' element={<ViewDonationRequests />}></Route>
            </Route>
            <Route path='/Admin' element={<Admin />}>
              <Route path='' element={<AdminDashboard />}></Route>
              <Route path='/AdminProfile' element={<AdminProfile />}></Route>
              <Route path='Donors' element={<DonorsList />}></Route>
              <Route path='Organizations' element={<OrganizationList />}></Route>
              <Route path='DonorsInfo/:donor_id' element={<DonorsInfo />}></Route>
              <Route path="OrganizationInfo/:org_id" element={<OrganizationInfo />}>  
                <Route path="" element={<HomeTab />} />
                <Route path="donations" element={<DonationsTab />} />
                <Route path="contact" element={<ContactTab />} />
              </Route>
            </Route>
            <Route path='/Organization' element={<DonationForm />}></Route>
          </Routes>
        </SideBarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
