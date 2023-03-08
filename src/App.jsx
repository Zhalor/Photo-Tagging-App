import './styles.css';
import waldoBeach from './images/Waldo_Beach.jpg';
import { TargetBox } from './components/TargetBox';
import { useState } from 'react';

function App() {
 const [style, setStyle] = useState({left: '0px', top: '0px'})

  function renderTargetBox(e) {
    console.log("X: " + e.nativeEvent.offsetX);
    console.log("Y: " + e.nativeEvent.offsetY);
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    setStyle({left: `${x + 10}px`, top: `${y + 10}px`});
    
  }

  return (
    <div className='image-container'>
      <img src={waldoBeach} alt="" onClick={renderTargetBox}/>
      <TargetBox style={style} />
    </div>
  )
}

export default App
