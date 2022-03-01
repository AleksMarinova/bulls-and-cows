import { FC, useState, useEffect, FormEvent } from 'react';
import { IGuess } from '../services/interface';
import { generateRandomNumber, validatePlayerNumber, calculateBullsAndCows } from '../utils/utils';
import { useNavigate } from "react-router-dom";
import './Practice.css'

import cow from "../img/caring-cow.png";

const Practice: FC = () => {
  const [computerNumber, setComputerNumber] = useState<string>('');
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<IGuess[]>([]);
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const validNumber = validatePlayerNumber(currentGuess);
    if (validNumber) {
      const guess = calculateBullsAndCows(currentGuess, computerNumber);
      if (guess === 'You won') {
        navigate('/won');
      } else {
        setGuesses([...guesses, guess]);
        setCurrentGuess('');
      }
    }
  }

  useEffect(() => {
    setComputerNumber(generateRandomNumber());
  }, [])

  return (
    <div className="gameplay-container" >
      <div className="gameplay-title" > <h1>Bulls 'n Cows </h1> </div>
      <div><img src={cow} alt="crops" className="board-image" /></div>

      <div className="guesses">{guesses.map((guess, i) => 
        <div key={i} className="guess"> 
          <div>{guess.guess}</div> 
          <div>Bulls: {guess.bulls} </div>
          <div>Cows: {guess.cows}</div>
        </div>)}
      </div>

      <div className="guess-form" >
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" value={currentGuess} onChange={e => setCurrentGuess(e.target.value)} />
          <button type="submit"> Guess </button>
        </form>
      </div>

    </div>
  );
}
 
export default Practice;