const decidePlayerTurn = () => {
  const players = [1, 2];
  return players[Math.floor(Math.random() * players.length)];
}