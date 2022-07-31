import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Facebook Auth</h1>
        <p className="App-intro">
            To Get Started  Authenticate with Facebook
        </p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
