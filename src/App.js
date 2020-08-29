import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is me trying out this new course to get a job in Germany!
        </p>
        <a
          className="App-link"
          href="https://bbc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read the latest news
        </a>
      </header>
    </div>
  );
}

export default App;
