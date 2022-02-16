import { useState, useEffect } from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
const image = require("../img/wellies.png");

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const user = {
      email,
      password,
    }
    // post req
  }

  return (
    <div className="login-container">
      <div>
        <img src={image} alt="crops" className="login-image" />
      </div>
      <div className="login-form">
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input type="text" className="login-input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
      <div className="login-redirect-container">
        <p>Don't have an account?</p>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </div>
  );
};

export default Login;
