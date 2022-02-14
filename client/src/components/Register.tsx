import {useState} from 'react';

const Register: React.FC = () => {
const [username, setUsername] = useState("");

  return (
    <div className="register-container">
        <h1>Register</h1>
        <form>
           <label>Name</label>
           <input type="text" placeholder="name" value="name" onChange={(e)=>setUsername(e.target.value)}/>
           <label>Email</label>
           <input type="text" placeholder="email"/>
           <label>Password</label>
           <input type="text" placeholder="password"/>
           <button>Register</button>
        </form>
    </div>
  )
}

export default Register;