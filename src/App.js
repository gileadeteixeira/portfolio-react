import logo from './logo.svg';
import './App.css';
import GitInfo from 'react-git-info/macro';

function getVersion(){
  const gitInfo = GitInfo();
  return gitInfo.tags.pop().replace("v", "");
}

function getCurrentYear(){
  return new Date().getFullYear();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {`Developed by Gileade Teixeira`}
          <br/>
          <i>{`${getCurrentYear()}, version ${getVersion()}`}</i>
        </p>
      </header>
    </div>
  );
}

export default App;
