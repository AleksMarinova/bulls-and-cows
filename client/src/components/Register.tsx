import { useState } from 'react';
import { register } from '../services/auth.service'

const Register: React.FC = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  e.stopPropagation();
  register({username, email, password})
   .then(res => {
       console.log(res);
   })
  
}

  return (
    <div className="register-container">
        <h1>Register</h1>
        <form onSubmit={(e)=>handleSubmit(e)} >
           <label>Name</label>
           <input type="text" placeholder="name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
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