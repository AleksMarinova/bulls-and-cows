import './Login.css';
import { useNavigate } from 'react-router-dom';
const image = require('../img/wellies.png');



const Login = () => { 

    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div>
                <img src={image} alt="crops" className="login-image"/>
            </div>
            <div className="login-form">
                <form>
                    <input type="text" className="login-input" placeholder="Username"/>
                    <input type="password" className="login-input" placeholder="Password"/>
                    <button>Login</button>
                </form>    
             </div>   
             <div className="login-redirect-container">
                <p>Don't have an account?</p>
                <button onClick = {() => navigate('/register')} >Register</button>
             </div>   
        </div>
    )
}

export default Login;