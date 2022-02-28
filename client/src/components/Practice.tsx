import { FC, useState, useEffect, FormEvent } from 'react';
import { IGuess } from '../services/interface';
import { generateRandomNumber, validatePlayerNumber, calculateBullsAndCows } from '../utils/utils';
import { useNavigate } from "react-router-dom";

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
    <div>
      <div>{guesses.map((guess, i) => <div key={i}>{guess.guess} Bulls: {guess.bulls} Cows: {guess.cows}</div>)}</div>
      <form onSubmit={e => handleSubmit(e)}>
        <input type="text" value={currentGuess} onChange={e => setCurrentGuess(e.target.value)} />
        <button type="submit"> Guess </button>
      </form>
    </div>
  );
}
 
export default Practice;