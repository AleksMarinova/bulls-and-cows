import { useNavigate } from "react-router-dom";
import "./Won.css";
const image = require("../img/pitch-fork.png");

const Won = () => {
  const navigate = useNavigate();

  return (
    <div className="won-container">
      <div>
        <img src={image} alt="crops" className="won-image" />
      </div>
      <div><h1> YOU WON! </h1></div>
      <div className="won-redirect-container">
        <button onClick={() => navigate("/setup")}>Play again</button>
      </div>
    </div>
  )
}

export default Won;