import Button from 'react-bootstrap/esm/Button';
import './App.css';
import TopBar from './Components/TopBar';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
      <TopBar />
      </UserProvider>
    </div>
  );
}

export default App;
