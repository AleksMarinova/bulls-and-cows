

interface IBoardProps {
  opponentsNumber: string;
  myNumber: string;
}

const Board = ({opponentsNumber, myNumber}: IBoardProps) => {
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