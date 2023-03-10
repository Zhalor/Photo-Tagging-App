import './styles.css';
import { Header } from './components/Header';
import { Level1 } from './components/Level1';
import { LevelSelect } from './components/LevelSelect';
import { useState } from 'react'
import { SelectFeedback } from './components/SelectFeedback';

function App() {
  const [isFeebackVisable, setIsFeebackVisable] = useState(false);
  const [level, setlevel] = useState('Level Select');
  const [characters, setCharacters] = useState([]);

  function handleLevelSelect() {
    switch(level) {
      case 'Level Select':
        return <LevelSelect setlevel={setlevel} setCharacters={setCharacters} />;
        break;
      case 'Level 1':
        return <Level1 setIsFeebackVisable={setIsFeebackVisable} characters={characters} setCharacters={setCharacters} />;
        break;
    }
  }

  return (
    <div className='container'>
      {isFeebackVisable && <SelectFeedback />}
      <Header characters={characters} />
      {handleLevelSelect()}
    </div>
  )
}

export { App }
