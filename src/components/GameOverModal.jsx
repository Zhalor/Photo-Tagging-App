import { db, doc, setDoc } from '../firebase.js';
import { useEffect, useState } from 'react';

function GameOverModal(props) {
  
  async function uploadScore() {
    const name = document.getElementById('name-input').value;
    const uploadBtn = document.getElementById('upload-btn');
    await setDoc(doc(db, `${props.level}Scores`, name), {
      score: time,
      name: name,
    });
    uploadBtn.disabled = true;
  }
  
  const [time, setTime] = useState(0)
  
  useEffect(() => {
    setTime((Date.now() - props.timer) / 1000);
  }, [])
 
  return (
    <div className="modal-wrapper">
      <div className="game-over-modal">
        <span>Winner Winner, Chicken Dinner!</span>
        <span>{time}</span>
        <label >Name: 
          <input type="text" id='name-input' maxLength={12} minLength={1} placeholder='Enter your Name...' />
        </label>
        
        <div>
          <button onClick={() => props.setLevel('Level Select')}>Play Again</button>
          <button onClick={uploadScore} id='upload-btn'>Upload Score</button>
        </div>
      </div>
    </div>
  )
  
}

export { GameOverModal };