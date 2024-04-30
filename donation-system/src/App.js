import './App.css';import TopBar from './Components/TopBar';
import { UserProvider } from './Components/UserContext';
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Pages/Home';
import Registeration from './Pages/Donor/Registeraion';

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

      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
