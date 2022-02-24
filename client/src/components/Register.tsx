import { useState } from 'react';
import { register } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import './Register.css';
const image = require('../img/crops.png');

const Register: React.FC = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  e.stopPropagation();
  register({username, email, password})
    .then(res => {
      navigate('/login');
    });
}

  return (
    <div className="register-container">
        <div>
          <img src={image} alt="crops" className="register-image"/>
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} >
           
           <input type="text" required placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
           
           <input type="text" required placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           
           <input type="password" required placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button>Register</button>
        </form>
        <div className="register-redirect">
          <p>Already have an account?</p>
          <button onClick={()=>navigate('/login')}>Log in!</button>
        </div>
    </div>
  )
}

export default Register;