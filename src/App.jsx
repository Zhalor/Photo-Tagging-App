import './styles.css';
import { Header } from './components/Header';
import { Xbox } from './components/Xbox';
import { LevelSelect } from './components/LevelSelect';
import { useState } from 'react'
import { SelectFeedback } from './components/SelectFeedback';

function App() {
  const [isFeebackVisable, setIsFeebackVisable] = useState(false);
  const [level, setLevel] = useState('Level Select');
  const [characters, setCharacters] = useState([]);

  return (
    <div className='container'>
      {isFeebackVisable && <SelectFeedback />}
      <Header characters={characters} level={level} setLevel={setLevel} />
      {level === 'Level Select' ? 
      <LevelSelect setLevel={setLevel} setCharacters={setCharacters} /> :
      <Xbox setIsFeebackVisable={setIsFeebackVisable} characters={characters} setCharacters={setCharacters} level={level} />}
    </div>
  )
}

export { App }
