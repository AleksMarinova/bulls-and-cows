import { IBoardProps } from '../services/interface';
import { useEffect, useState } from 'react';
import { validatePlayerNumber } from '../utils/utils';

const Board = ({opponentsNumber, myNumber, socket, myInitialTurn, room, user}: IBoardProps) => {
  const [myTurn, setMyTurn] = useState<boolean>(myInitialTurn);
  const [currentGuess, setCurrentGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([])
  

  const submitGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
   
    const validNumber = validatePlayerNumber(currentGuess);
    if (validNumber===true){
      
    }
  }

  return (
    <div>
      <div className="guesses"> {guesses} </div>
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