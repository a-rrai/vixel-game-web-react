export default function GameCard({ game }) {
  return (
    <div className="game-card">
      {/* Jika ada gambar */}
      {game.image && (
        <img
          src={game.image}
          alt={game.title}
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      )}
      <h3>{game.title}</h3>
      <p>Genre: {game.genre}</p>
    </div>
  );
}
