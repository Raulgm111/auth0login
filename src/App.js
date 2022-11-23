import logo from './logo.svg';
import { LoginButton } from './Components/Login';
import { LogoutButton } from './Components/Logout';
import { Profile } from './Components/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginButton/>
        <Profile/>
        <LogoutButton/>
      </header>
    </div>
  );
}

export default App;
