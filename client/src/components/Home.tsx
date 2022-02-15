import {useNavigate} from 'react-router-dom';
import './Home.css';
const logo = require('../img/cow.png');

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <h1>Bulls & Cows</h1>
            <div className="logo">
                <img src={logo} alt="Bulls and Cows logo"/>
            </div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}
export default Home;