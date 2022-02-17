import React, { useState } from 'react'

interface IGameplayProps {
  user: Object;
  room: string;
  socket: any;
}

const Gameplay = ({user, room, socket}:IGameplayProps) => {
  const [playerNumberChosen, setPlayerNumberChosen] = useState(false);
  const [myNumber, setMyNumber] = useState('');
  const [opponentsNumber, setOpponentsNumber] = useState('');

  const submitMyNumber = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await socket.emit('submit_my_number', {room, user, number: myNumber});
    setPlayerNumberChosen(true);
  }

  const PlayerGameNumber = () => {
    return (
      <div>
        <form onSubmit={(e) => submitMyNumber(e)}>
          <input type="text" onChange={(e) => setMyNumber(e.target.value)}/>
          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }

  const Board = () => {
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

  return (
    <div>
      <h1>Bulls and Cows</h1>
      {playerNumberChosen ? Board() : PlayerGameNumber()}
    </div>
    
  )
}

export default Gameplay;