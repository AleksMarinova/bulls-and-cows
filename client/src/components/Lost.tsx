import { useNavigate } from "react-router-dom";
import "./Lost.css";
const image = require("../img/pig.png");

const Lost =()=> {
  const navigate = useNavigate();

  return (
    <div className="lost-container">
      <div>
        <img src={image} alt="crops" className="lost-image" />
      </div>
      <div><h1> YOU LOST! </h1></div>
      <div className="lost-redirect-container">
        <button onClick={() => navigate("/setup")}>Play again</button>
      </div>
    </div>
  )
}

export default Lost;