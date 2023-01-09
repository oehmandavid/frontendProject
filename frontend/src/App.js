import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mjau
        </p>
        <a
          className="App-link"
          href="https://musikhjälpen.se"
          target="_blank"
          rel="noopener noreferrer"
        ><big> 
          Musikhjälpen
        </big>
        </a>
      </header>
    </div>
  );
}

export default App;
