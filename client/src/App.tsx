import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Setup from './components/Setup';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Won from './components/Won';
import Lost from './components/Lost'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/setup' element={<Setup />} />
        <Route path='/won' element={<Won />} />
        <Route path='/lost' element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
