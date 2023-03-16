import SNES from '../images/SNES/SNES.jpg';
import N64 from '../images/N64/N64.jpg';
import Gamecube from '../images/Gamecube/Gamecube.jpg';
import Xbox from '../images/Xbox/Xbox.jpg';
import Xbox360 from '../images/Xbox360/Xbox360.jpg';
import PS1 from '../images/PS1/PS1.jpg';
import PS2 from '../images/PS2/PS2.jpg';
import PS3 from '../images/PS3/PS3.jpg';


function LevelSelect(props) {
  
  return (
   <div className="level-select-container">
    <div className="level-select-btn" onClick={() => {
      props.setLevel('SNES');
      props.setCharacters(['Mario', 'MegamanX', 'Samus'])
      }}><img src={SNES} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('N64');
      props.setCharacters(['BobOmb', 'Brian', 'Link'])
      }}><img src={N64} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('Gamecube');
      props.setCharacters(['AiAi', 'Billy', 'Sheik'])
      }}><img src={Gamecube} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('Xbox');
      props.setCharacters(['Abe', 'Raz', 'Sam'])
      }}><img src={Xbox} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('Xbox360');
      props.setCharacters(['Garrus', 'Isaac', 'MasterChief'])
      }}><img src={Xbox360} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('PS1');
      props.setCharacters(['Alucard', 'Ape', 'Cloud'])
      }}><img src={PS1} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('PS2');
      props.setCharacters(['Kratos', 'Ratchet', 'Jack'])
      }}><img src={PS2} />
    </div>

    <div className="level-select-btn" onClick={() => {
      props.setLevel('PS3');
      props.setCharacters(['Cole', 'Sackboy', 'Traveler'])
      }}><img src={PS3} />
    </div>
   
  </div>
  )
}

export { LevelSelect }
