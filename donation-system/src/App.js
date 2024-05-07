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
import DonorTypes from './Pages/VolunteerRoleSelection';
import Cliniclocation from './Pages/Donor/ClinicLocation';
import Subjectclass from './Pages/Donor/SubjectClassSelection';

import DonorPage from './Pages/Donor/Donor';
import DonorDashboard from './Pages/Donor/DonorDashboard';
import DonorRegistration from './Pages/Donor/DonorRegistration';
import ViewDonationRequests from './Pages/Donor/ViewDonationRequest';
import DonationInfo from './Pages/Donor/DonationsInfo';
import VolunteerRoleSelection from './Pages/VolunteerRoleSelection';
import DocumentUpload from './Pages/Donor/DocumentUpload';
import Delivery from './Pages/Donor/Delivery'


import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminProfile from './Pages/Admin/AdminProfile';
import DonorsList from './Pages/Admin/DonorsList';
import OrganizationList from './Pages/Admin/OrganizationList';
import DonorsInfo from './Pages/Admin/DonorsInfo';
import OrganizationInfo from './Pages/Admin/OrganizationInfo';
import { HomeTab, DonationsTab, ContactTab } from './Pages/Admin/OrganizationInfo';
import { HomeTab as DonorHomeTab, DonationsTab as DonorDonationsTab, ContactTab as DonorContactTab } from './Pages/Admin/DonorsInfo';
import AccountSettings from './Pages/Admin/AccountSettings';
import Requests from './Pages/Admin/Requests';

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
            
            <Route path='/Volunteer' element={<DonorTypes />}></Route>
            <Route path='/Doctor' element={<Cliniclocation />}></Route>
            <Route path='/Teacher' element={<Subjectclass />}></Route>


            <Route path='/Donor' element={<DonorPage />}>
              <Route path='' element={<DonorDashboard />}></Route>
              <Route path='DonationRequests' element={<ViewDonationRequests />}></Route>
              <Route path='Donationsinfo/:id' element={<DonationInfo />}></Route>
              <Route path='VolunteerSelection' element={<VolunteerRoleSelection />}></Route>
              <Route path='DocumentUpload' element={<DocumentUpload />}></Route>
              <Route path='Delivery' element={<Delivery />}></Route>

            </Route>
            <Route path='/Admin' element={<Admin />}>
              <Route path='' element={<AdminDashboard />}></Route>
              <Route path='/AdminProfile' element={<AdminProfile />}></Route>
              <Route path='Donors' element={<DonorsList />}></Route>
              <Route path='Organizations' element={<OrganizationList />}></Route>
              <Route path='DonorsInfo/:donor_id' element={<DonorsInfo />}>
                <Route path="" element={<DonorHomeTab />} />
                <Route path="donations" element={<DonorDonationsTab />} />
                <Route path="contact" element={<DonorContactTab />} />
              </Route>
              <Route path="OrganizationInfo/:org_id" element={<OrganizationInfo />}>
                <Route path="" element={<HomeTab />} />
                <Route path="donations" element={<DonationsTab />} />
                <Route path="contact" element={<ContactTab />} />

              </Route>
              <Route path='Settings' element={<AccountSettings/>}/>
              <Route path='Requests' element={<Requests/>}/>
            </Route>
            <Route path='/Organization' element={<DonationForm />}></Route>
          </Routes>
        </SideBarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
