import { useEffect, useState } from "react";
import { getLocalStorage } from "../services/auth.service";
import { io } from "socket.io-client";
import Gameplay from "./Gameplay";

const API_URL: any = process.env.REACT_APP_API_END_POINT;
console.log(API_URL);
const socket = io(API_URL);

const Setup = () => {
  const [user, setUser] = useState(() => {
    const user = getLocalStorage();
    return user;
  });
  const [room, setRoom] = useState("");
  const [inGame, setInGame] = useState(false);

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    setInGame(true);
  };

  const newGameForm = () => {
    return (
      <>
        <h1>New Game</h1>
        <form onSubmit={(e) => handleStartGame(e)}>
          <input
            type="text"
            placeholder="Enter room name"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button type="submit">Enter game</button>
        </form>
      </>
    );
  };

  return <div>{inGame ? <Gameplay user={user} room={room} socket={socket}/> : newGameForm()}</div>;
};

export default Setup;
