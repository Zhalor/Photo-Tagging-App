import SNES from '../images/SNES/SNES.jpg';
import N64 from '../images/N64/N64.jpg';
import Gamecube from '../images/Gamecube/Gamecube.jpg';
import Xbox from '../images/Xbox/Xbox.jpg';
import Xbox360 from '../images/Xbox360/Xbox360.jpg';
import PS1 from '../images/PS1/PS1.jpg';
import PS2 from '../images/PS2/PS2.jpg';
import PS3 from '../images/PS3/PS3.jpg';
import { collection, db, getDocs } from '../firebase';

function ScoreSelect(props) {
  async function getScore(gameConsole) {
    const snapshot = await getDocs(collection(db, `${gameConsole}Scores`));
    const arr = [];
    snapshot.forEach(item => {  
      arr.push(item.data())
    });
    arr.sort((first, second) => first.score > second.score ? 1 : -1);
    props.setScores(arr);
  }

  return (
    <div className="score-select-container">
     <div className="score-select-btn" onClick={() => getScore('SNES')}>
      <img src={SNES} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('N64')}>
      <img src={N64} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('Gamecube')}>
      <img src={Gamecube} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('Xbox')}>
      <img src={Xbox} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('Xbox360')}>
      <img src={Xbox360} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('PS1')}>
      <img src={PS1} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('PS2')}>
      <img src={PS2} />
     </div>
 
     <div className="score-select-btn" onClick={() => getScore('PS3')}>
      <img src={PS3} />
     </div>
    
   </div>
   )
}

export { ScoreSelect }