import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';

const App =()=> {
  return (
    <div className="App">
     <NavBar />
     <Home />
    </div>
  );
}

export default App;
