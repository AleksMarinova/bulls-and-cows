interface IGameplayProps {
  user: Object;
  room: string;
  socket: any;
}

const Gameplay = ({user, room, socket}:IGameplayProps) => {
  console.log(user, room, socket);

  return (
    <h1>Gameplay</h1>
  )
}

export default Gameplay;