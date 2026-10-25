import { useState } from 'react';

export default function FormTambahGame({ onAddGame }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre) return;
    
    onAddGame({ title, genre });
    
    setTitle('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>Tambah Game Baru</h3>
      <div>
        <input 
          type="text" 
          placeholder="Judul Game" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div style={{ margin: '10px 0' }}>
        <input 
          type="text" 
          placeholder="Genre" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
        />
      </div>
      <button type="submit">Tambah Game</button>
    </form>
  );
}
