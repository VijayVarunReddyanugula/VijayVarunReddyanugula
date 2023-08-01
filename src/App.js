
import React from 'react';
import './App.css';
import ContainerCard from "./components/ContainerCard"
function App() {
  return (
    <div className="App">
      <div className="App-container">
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className='col px-5'>
            <ContainerCard />
            </div>
          </div>
        </div>

      </div>

      {/* <header className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
