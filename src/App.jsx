import './styles.css';
import { Header } from './components/Header';
import { Level } from './components/Level';
import { LevelSelect } from './components/LevelSelect';
import { useState } from 'react'
import { SelectFeedback } from './components/SelectFeedback';
import { GameOverModal } from './components/GameOverModal.jsx';

function App() {
  const [isFeebackVisable, setIsFeebackVisable] = useState(false);
  const [found, setFound] = useState(false);
  const [level, setLevel] = useState('Level Select');
  const [characters, setCharacters] = useState([]);

  function handleFeedback(feedBackBool, foundBool) {
    setIsFeebackVisable(feedBackBool);
    setFound(foundBool);
  }

  return (
    <div className='container'>
      {isFeebackVisable && <SelectFeedback found={found} />}
        <Header 
          characters={characters}
          level={level}
          setLevel={setLevel} 
        />
      {level === 'Level Select' ? 
        <LevelSelect
          setLevel={setLevel}
          setCharacters={setCharacters}
        /> :
        <Level 
          handleFeedback={handleFeedback}
          characters={characters}
          setCharacters={setCharacters}
          level={level} />
      }
      {characters.length === 0 && level !== 'Level Select' ?
        <GameOverModal
          level={level}
          setLevel={setLevel} /> :
          null
      }
    </div>
  )
}

export { App }
