export default function GameStats({ count }) {
    if (count === 0) {
      return <p style={{ color: 'red' }}>Belum ada data Game di katalog.</p>;
    }
    
    return <p>Total game di katalog: <strong>{count}</strong></p>;
  }