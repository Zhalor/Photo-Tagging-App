import waldoBeach from '../images/Waldo_Beach.jpg';
import { TargetSelect } from './TargetBox';
import { useState } from 'react';

function Level1(props) {
  const [style, setStyle] = useState({left: '0px', top: '0px'});
  const [xLocation, setXLocation] = useState(0);
  const [yLocation, setYLocation] = useState(0);


  function renderTargetBox(e) {
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setXLocation(x);
    setYLocation(y);
    console.log(`X: ${x} - Y: ${y}`);
    const boxDisplay = document.querySelector('.target-select').style.display;
    if(boxDisplay === '' || boxDisplay === 'none') {
      setStyle({left: `${x + 10}px`, top: `${y + 10}px`, display: 'flex'});
    } else {
      setStyle({display: 'none'});
    }
  }

  return (
    <div className='image-container'>
      <img src={waldoBeach} alt="An image of Where's Waldo on the beach" onClick={renderTargetBox} />
      <TargetSelect style={style} setStyle={setStyle} xLocation={xLocation} yLocation={yLocation}
      characters={props.characters} setCharacters={props.setCharacters} setIsFeebackVisable= {props.setIsFeebackVisable}/>
    </div>
  )
}

export { Level1 }
