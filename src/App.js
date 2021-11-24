import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentVersionTag } from './services/github-services'

function getCurrentYear(){
  return new Date().getFullYear();
};

function App() {
  // States
  const [version, setVersion] = useState('0.0.1');

  // Hooks
  useEffect(() => {
    // New title
    document.title = `Gileade Teixeira`;

    // Load current git version
    (async ()=>{
      const currentVersionTag = await getCurrentVersionTag();
      setVersion(currentVersionTag);
    })();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`Developed by Gileade Teixeira`}
          <br/>
          <i>{`${getCurrentYear()}, version ${version}`}</i>
        </p>
      </header>
    </div>
  );
};

export default App;