import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="home">
            <h1>Bulls and Cows</h1>
            <div className="logo"></div>
            <button onClick={() => navigate('/login')}>Login</button>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}
export default Home;