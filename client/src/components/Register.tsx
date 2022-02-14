import { useState } from 'react';

const Register: React.FC = () => {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e: React.FormEvent)=>{
  e.preventDefault();
  e.stopPropagation();
  console.log(username, email, password);
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