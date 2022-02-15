import { useState } from 'react';
import { register } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

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
        <h1>Register</h1>
        <form onSubmit={(e)=>handleSubmit(e)} >
           <label>Username</label>
           <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
           <label>Email</label>
           <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
           <label>Password</label>
           <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
           <button>Register</button>
        </form>
    </div>
  )
}

export default Register;