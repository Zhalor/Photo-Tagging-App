import { levelImages } from '../images/Images.js';
import { TargetSelect } from './TargetBox';
import { useState } from 'react';

function Level(props) {
  const [style, setStyle] = useState({left: '0px', top: '0px'});
  const [xLocation, setXLocation] = useState(0);
  const [yLocation, setYLocation] = useState(0);


  function renderTargetBox(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setXLocation(x);
    setYLocation(y);
    console.log(`X: ${x} - Y: ${y}`);
    const targetSelectDisplay = document.querySelector('.target-select').style.display;
    if(targetSelectDisplay === '' || targetSelectDisplay === 'none') {
      setStyle({left: `${x + 10}px`, top: `${y + 10}px`, display: 'flex'});
    } else {
      setStyle({display: 'none'});
    }
  }

  return (
    <div className='image-container'>
      <img src={levelImages[props.level]} onClick={renderTargetBox} />
      <TargetSelect style={style} setStyle={setStyle} xLocation={xLocation} yLocation={yLocation}
      characters={props.characters} setCharacters={props.setCharacters} handleFeedback= {props.handleFeedback} 
      level={props.level} />
    </div>
  )
}

export { Level }
