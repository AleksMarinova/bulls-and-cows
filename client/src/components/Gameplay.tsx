import { useState } from 'react'

interface IGameplayProps {
  user: Object;
  room: string;
  socket: any;
}

const Gameplay = ({user, room, socket}:IGameplayProps) => {
  const [playerNumberChosen, setPlayerNumberChosen] = useState(false);
  const [myNumber, setMyNumber] = useState('');

  const playerGameNumber = () => {
    return (
      <div>
        <form action="" onSubmit={(e) => setPlayerNumberChosen(true)}>
          <input type="text" onChange={(e) => setMyNumber(e.target.value)}/>
          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <h1>Bulls and Cows</h1>
      {playerNumberChosen ? <div>hey</div> : playerGameNumber()}
    </div>
    
  )
}

export default Gameplay;