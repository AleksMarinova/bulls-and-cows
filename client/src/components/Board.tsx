import { IBoardProps, IGuess } from '../services/interface';
import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import { validatePlayerNumber, calculateBullsAndCows } from '../utils/utils';

const Board = ({opponentsNumber, myNumber, socket, myInitialTurn, room, user}: IBoardProps) => {
  const [myTurn, setMyTurn] = useState<boolean>(myInitialTurn);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([] as any);
  
  const submitGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
   
    const validNumber = validatePlayerNumber(currentGuess);
    if (validNumber === true) {
      const guessResult = calculateBullsAndCows(currentGuess, opponentsNumber);
      setGuesses([...guesses, guessResult]);
    }
  }

  return (
    <div>
      <div className="guesses"> {guesses.map((guess: IGuess) => {
        return <div>{guess.guess} | Bulls: {guess.bulls} | Cows: {guess.cows}</div>;
      })}
      
       </div>
      <div>my turn: {myTurn.toString()}</div>
      <div> <h3>opponent's number: {opponentsNumber}</h3> </div>
      {
         myTurn ? 
         <div>
           <form onSubmit={(e)=>submitGuess(e)} >
            <input type="text" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button type="submit">guess</button>
           </form>
         </div> :
        <div>waiting for opponent's turn</div>
      }
     
      <div> <h3>my number: {myNumber}</h3> </div>
    </div>
  )
}

export default Board;