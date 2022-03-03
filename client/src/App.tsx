import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Setup from './components/Setup';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Won from './components/Won';
import Lost from './components/Lost';
import Practice from './components/Practice';
import RequireAuth from './components/RequireAuth';

const App: React.FC = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login setUserLoggedIn={setUserLoggedIn} />} />
        <Route path='/register' element={<Register />} />
        <Route path='/setup' element={
        <RequireAuth userLoggedIn={userLoggedIn}>
          <Setup />
        </RequireAuth>
        }> 
        </Route>
        <Route path='/won' element={<Won />} />
        <Route path='/lost' element={<Lost />} />
        <Route path='/practice' element={<Practice />} />
      </Routes>
    </div>
  );
}

export default App;
