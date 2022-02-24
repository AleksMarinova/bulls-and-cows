import { IBoardProps, IGuess } from '../services/interface';
import { useState, useEffect } from 'react';
import { validatePlayerNumber, calculateBullsAndCows } from '../utils/utils';

const Board = ({opponentsNumber, myNumber, socket, myInitialTurn, room, user}: IBoardProps) => {
  const [myTurn, setMyTurn] = useState<boolean>(myInitialTurn);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([] as any);
  const [youWon, setYouWon] = useState(false);
  const [youLost, setYouLost] = useState(false);
  
  const submitGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
   
    const validNumber = validatePlayerNumber(currentGuess);
    if (validNumber === true) {
      const guessResult = calculateBullsAndCows(currentGuess, opponentsNumber);
      
      if (guessResult === 'You won') {
        setYouWon(true);
        socket.emit('opponent_lost', { room });
        return;
      }

      setGuesses([...guesses, guessResult]);
      setMyTurn(!myTurn);
      socket.emit('switch_turn', { room });
    }
  }

  socket.on('your_turn', () => {
    setMyTurn(!myTurn);
  });

  socket.on('you_lost', () => {
    setYouLost(true);
  });

  return (
    <div>
      <div className="guesses"> {guesses.map((guess: IGuess, index: number ) => {
        return <div key={index} >{guess.guess} | Bulls: {guess.bulls} | Cows: {guess.cows}</div>;
      })}
      
       </div>
      <div>my turn: {myTurn.toString()}</div>
      {!youLost && !youWon ? null : youLost ? <p>You Lost! Opponent's number was {opponentsNumber}</p> : <p>You Won!</p>}
      {
         myTurn ? 
         <div>
           <form onSubmit={(e)=>submitGuess(e)} >
            <input type="text" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button type="submit">guess</button>
           </form>
         </div> 
         :  <div>waiting for opponent's turn</div>
      }
      
      <div> <h3>my number: {myNumber}</h3> </div>
    </div>
  )
}

export default Board;