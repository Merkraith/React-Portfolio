import React from 'react';
import './App.css';
import AppBar from './components/AppBar';
import Portfolio from './Pages/Portfolio';




function App() {
  return (
    <div className="App">
      <div>
        <AppBar/>
      </div>
      <div>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
