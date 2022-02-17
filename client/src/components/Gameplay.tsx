import React, { useState, useEffect } from 'react'
import { validatePlayerNumber } from '../utils/utils'
import Board from './Board'
import './Gameplay.css'

const image = require('../img/tractor.png')

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
    if (validatePlayerNumber(myNumber)) {
      setPlayerNumberChosen(true);
      return await socket.emit('submit_my_number', {room, user, number: myNumber});
    } 
  }

  const PlayerGameNumber = () => {
    return (
      <div className="choose-number">
        <div>
          <img src={image} alt="tractor" />
        </div>
      <div className="enter-number-text">Enter your four digit number. You will be redirected to your game when your opponent is ready with their choice.</div>
        <form onSubmit={(e) => submitMyNumber(e)}>
          <input type="text" onChange={(e) => setMyNumber(e.target.value)} required/>
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

  interface iOpponentPlayer {
    number: string,
    room: string, 
    user: { email: string, username: string },
  }

  useEffect(() => {
    socket.on('receive_number', (data: iOpponentPlayer) => {
      setOpponentsNumber(data.number)
    })
  }, [socket])

  return (
    <div className="enter-number-container">
     
      {playerNumberChosen ? Board(): PlayerGameNumber()}
    </div>
    
  )
}

export default Gameplay;