import { useState } from 'react';
import Header from './components/Header';
import GameStats from './components/GameStats';
import FormTambahGame from './components/FormTambahGame';
import GameList from './components/GameList';

function App() {
  const [games, setGames] = useState([
    { 
      id: 1, 
      title: 'Life is Strange', 
      genre: 'Graphic Adventure', 
      image: '/images/life is strange.png' 
    },
    { 
      id: 2, 
      title: 'Until Then', 
      genre: 'Adventure', 
      image: '/images/until then.png' 
    },
    { 
      id: 3, 
      title: 'What Remains of Edith Finch', 
      genre: 'Interactive Story', 
      image: '/images/what remains of edith finch.png' 
    },
    { 
      id: 4, 
      title: 'A Space for the Unbound', 
      genre: 'Slice of Life / Adventure', 
      image: '/images/a space for the unbound.png' 
    },
    { 
      id: 5, 
      title: 'Clair Obscur: Expedition 33', 
      genre: 'RPG', 
      image: '/images/Clair Obscur 33.png' 
    },
    { 
      id: 6, 
      title: 'Death Stranding 2: On The Beach', 
      genre: 'Action / Adventure', 
      image: '/images/Death Stranding 2.jpg' 
    },
    { 
      id: 7, 
      title: 'Ghost of Yōtei', 
      genre: 'Action / Adventure', 
      image: '/images/Ghost of Yotei.webp' 
    },
    { 
      id: 8, 
      title: 'Hades II', 
      genre: 'Roguelike', 
      image: '/images/hades 2.webp' 
    }
  ]);

  const handleAddGame = (newGame) => {
    const gameToInsert = {
      id: Date.now(),
      title: newGame.title,
      genre: newGame.genre
    };
    setGames([...games, gameToInsert]);
  };

  return (
    <div className="app-container">
      <Header />
      <GameStats count={games.length} />
      <FormTambahGame onAddGame={handleAddGame} />
      <GameList games={games} />
    </div>
  );
}

export default App;