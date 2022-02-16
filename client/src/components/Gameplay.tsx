interface IGameplayProps {
  user: Object;
  room: string;
  socket: any;
}

const Gameplay = ({user, room, socket}:IGameplayProps) => {

  return (
    <h1>Gameplay</h1>
  )
}

export default Gameplay;