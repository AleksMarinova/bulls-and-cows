import { IBoardProps } from '../services/interface';
// import { useEffect } from 'react';
const Board = ({opponentsNumber, myNumber, socket}: IBoardProps) => {


  // const getMyTurn = async () => {
  //   await socket.emit('get_my_turn');
  // }

  // useEffect(()=>{
   
  // }, []);

  return (
    <div>
      <div className="guesses"></div>
      <div> <h3>opponent's number: {opponentsNumber}</h3> </div>
      <input type="text" />
      <button>guess</button>
      <div> <h3>my number: {myNumber}</h3> </div>
    </div>
  )
}

export default Board;