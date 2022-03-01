import { IBoardProps, IGuess } from '../services/interface';
import './Board.css'
import { useState } from 'react';
import { validatePlayerNumber, calculateBullsAndCows } from '../utils/utils';
import { useNavigate } from "react-router-dom";

const Board = ({opponentsNumber, myNumber, socket, myInitialTurn, room, user}: IBoardProps) => {
  const [myTurn, setMyTurn] = useState<boolean>(myInitialTurn);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([] as any);
  const [youWon, setYouWon] = useState(false);
  const [youLost, setYouLost] = useState(false);
  const navigate = useNavigate();
  
  const submitGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
   
    const validNumber = validatePlayerNumber(currentGuess);
    if (validNumber === true) {
      const guessResult = calculateBullsAndCows(currentGuess, opponentsNumber);
      
      if (guessResult === 'You won') {
        setYouWon(true);
        socket.emit('opponent_lost', { room });
        setTimeout(() => {
          navigate('/won', { replace: true });
        }, 3000)
      }

      setGuesses([...guesses, guessResult]);
      setMyTurn(!myTurn);
      setCurrentGuess('');
      socket.emit('switch_turn', { room });
    }
  }

  socket.on('your_turn', () => {
    setMyTurn(!myTurn);
  });

  socket.on('you_lost', () => {
    setYouLost(true);
    setTimeout(() => {
      navigate('/lost', { replace: true });
    }, 3000)
  });

  return (
    <div className="gameplay-container" >
      <div className="gameplay-title" > <h1>Cows 'n Bulls</h1> </div>
      <div className="gameplay-myNumber" > <h5>my number: {myNumber}</h5> </div>
      <div className="guesses"> {guesses.map((guess: IGuess, index: number ) => {
        return <div className="guess" key={index} >{guess.guess} -- Bulls: {guess.bulls} -- Cows: {guess.cows}</div>;
      })}
      
       </div>
      
      {/* {!youLost && !youWon ? null : youLost ? <p>You Lost! Opponent's number was {opponentsNumber}</p> : <p>You Won!</p>} */}
      {
         myTurn ? 
         <div className="guess-form" >
           <form onSubmit={(e)=>submitGuess(e)} >
            <input type="text" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value)} />
            <button type="submit">guess</button>
           </form>
         </div> 
         :  <div className="guess-form">waiting for opponent's turn</div>
      }
      
      
    </div>
  )
}

export default Board;