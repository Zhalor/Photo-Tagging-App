import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { About } from './components/About';
import { HighScores } from './components/HighScores';


function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/highscores' element={<HighScores />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouteSwitch }