import { IBoardProps } from '../services/interface';
import { useEffect, useState } from 'react';

const Board = ({opponentsNumber, myNumber, socket, myInitialTurn}: IBoardProps) => {

  const [myTurn, setMyTurn] = useState<boolean>(myInitialTurn);

  return (
    <div>
      <div className="guesses"></div>
      <div>my turn: {myTurn.toString()}</div>
      <div> <h3>opponent's number: {opponentsNumber}</h3> </div>
      {
         myTurn ? <div><input type="text" />
         <button>guess</button></div> : <div>waiting for opponent's turn</div>
      }
     
      <div> <h3>my number: {myNumber}</h3> </div>
    </div>
  )
}

export default Board;