import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// import Login from './components/Login';
import Register from './components/Register';
// import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/register' element={<Register />} />
        {/* <Route path='/login' element={<Game />} /> */}
      </Routes>
    </div>
  );
}

export default App;
