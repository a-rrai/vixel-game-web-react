import GameCard from './GameCard';

export default function GameList({ games }) {
  return (
    <div>
      <h2>Daftar Game</h2>
      <div className="game-grid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}