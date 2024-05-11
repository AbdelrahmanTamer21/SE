import './App.css';

import { UserProvider } from './Components/UserContext';
import TopBar from './Components/TopBar';
import { SideBarProvider } from './Components/SideBarContext';

import { Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

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
import ViewDonationRequest from './Pages/Donor/ViewDonationRequest';
import GeneralTable from './Pages/Donor/GeneralTable';
import ClothingTable from './Pages/Donor/ClothingTable';
import FoodTable from './Pages/Donor/FoodTable';
import ToysTable from './Pages/Donor/ToysTable';
import MedicalSuppliesTable from './Pages/Donor/MedicalSuppliesTable';
import BloodDonationsTable from './Pages/Donor/BloodDonationsTable';
import SchoolSuppliesTable from './Pages/Donor/SchoolSuppliesTable';
import DonationInfo from './Pages/Donor/DonationsInfo';
import VolunteerRoleSelection from './Pages/VolunteerRoleSelection';
import DocumentUpload from './Pages/Donor/DocumentUpload';
import Delivery from './Pages/Donor/Delivery';
import TeachingPosts from './Pages/Donor/ViewTeachingPosts';
import TeachingPostsInfo from './Pages/Donor/TeachingPostsInfo' ;
import MedicalCasesTable from './Pages/Donor/MedicalCasesTable';
import MedicalCasesInfo from './Pages/Donor/MedicalCaseInfo';
import Donate from './Pages/Donor/Donate';
import DonorOrganizationList from './Pages/Donor/DonorOrganizationList';
import DonorOrganizationInfo from './Pages/Donor/DonorOrganizationInfo';

import Admin from './Pages/Admin/Admin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import Profile from './Profile'; 
import DonorsList from './Pages/Admin/DonorsList';
import OrganizationList from './Pages/Admin/OrganizationList';
import DonorsInfo from './Pages/Admin/DonorsInfo';
import OrganizationInfo from './Pages/Admin/OrganizationInfo';
import { HomeTab, DonationsTab, ContactTab } from './Pages/Admin/OrganizationInfo';
import { HomeTab as DonorHomeTab, DonationsTab as DonorDonationsTab, ContactTab as DonorContactTab } from './Pages/Admin/DonorsInfo';
import AccountSettings from './AccountSettings';
import Requests from './Pages/Admin/Requests';
import {DonorsTab , OrganizationsTab} from './Pages/Admin/Requests';

import OrganizationDashboard from './Pages/Organization/OrganizationDashboard';
import OrgViewDonationRequest from './Pages/Organization/OrgViewDonationRequests';
import MyDonations from './Pages/Donor/MyDonations';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <SideBarProvider>
          <TopBar />
          <Routes basename="/my-app">
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/RegistrationType' element={<RegistrationType />} />

            <Route path='/Home' element={<Home />} />

            <Route path='/OrganizationRegistration' element={<OrganizationRegistration />} />

            <Route path='/DonorRegistration' element={<DonorRegistration />} />
            <Route path='/Volunteer/:username' element={<DonorTypes />} />
            <Route path='/Doctor/:username' element={<Cliniclocation />} />
            <Route path='/Teacher/:username' element={<Subjectclass />} />


            <Route path='/Donor' element={<DonorPage />}>
              <Route path='' element={<DonorDashboard />} />
              <Route path='DonationRequests' element={<ViewDonationRequest />}>
                <Route path='' element={<GeneralTable />} />
                <Route path='Clothing' element={<ClothingTable />} />
                <Route path='Food' element={<FoodTable />} />
                <Route path='Toys' element={<ToysTable />} />
                <Route path='MedicalSupplies' element={<MedicalSuppliesTable />} />
                <Route path='BloodDonations' element={<BloodDonationsTable />} />
                <Route path='SchoolSupplies' element={<SchoolSuppliesTable />} />
              </Route>
              <Route path='Donationsinfo/:id' element={<DonationInfo />} />
              <Route path='Donate/:request_id' element={<Donate />} />
              <Route path='VolunteerSelection' element={<VolunteerRoleSelection />} />
              <Route path='DocumentUpload' element={<DocumentUpload />} />
              <Route path='Delivery' element={<Delivery />} />
              <Route path='DonorOrganizations' element={<DonorOrganizationList />} />
              <Route path='Profile' element={<Profile />} />
              <Route path='Settings' element={<AccountSettings/>} />
              <Route path='Teaching' element={<TeachingPosts/>} />
              <Route path='MedicalCases' element={<MedicalCasesTable/>} />
              <Route path='MedicalCasesInfo/:id' element={<MedicalCasesInfo/>} />
              <Route path='TeachingPostsInfo/:id' element={<TeachingPostsInfo/>} />
              <Route path='MyDonations' element={<MyDonations />} />
              <Route path="DonorOrganizationInfo/:org_id" element={<DonorOrganizationInfo />}>
                <Route path="" element={<HomeTab />} />
                <Route path="donations" element={<DonationsTab />} />
                <Route path="contact" element={<ContactTab />} />
              </Route>
            </Route>

            <Route path='/Admin' element={<Admin />}>
              <Route path='' element={<AdminDashboard />} />
              <Route path='Donors' element={<DonorsList />} />
              <Route path='Organizations' element={<OrganizationList />} />
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
              <Route path='Profile' element={<Profile />} />
              <Route path='Settings' element={<AccountSettings/>} />
              <Route path='Requests' element={<Requests/>}>
                <Route path='' element={<OrganizationsTab />} />
                <Route path='Donors' element={<DonorsTab/>} />
              </Route>
            </Route>
            <Route path='/Organization' element={<DonationForm />} />
            <Route path='/OrganizationDashboard' element={<OrganizationDashboard />} />
            <Route path='/OrgViewRequests' element={<OrgViewDonationRequest />} />
          </Routes>

        </SideBarProvider>
      </UserProvider>
    </div>
  );
}

export default App;
