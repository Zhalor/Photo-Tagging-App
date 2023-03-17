import { db, doc, getDoc } from '../firebase.js';
import { characterImages } from '../images/Images.js';

function TargetSelect(props) {

  async function checkCharacterLocation(character) {
    props.setStyle({display: 'none'});
    const snapshot = await getDoc(doc(db, props.level, character));
    const charCoords = snapshot.data();

    if(props.xLocation > charCoords.xStart && props.xLocation < charCoords.xEnd 
      && props.yLocation > charCoords.yStart && props.yLocation < charCoords.yEnd) {
        props.handleFeedback(true, true);
        const arr = props.characters.filter(char => char !== character);
        props.setCharacters(arr);
    } else {
      props.handleFeedback(true, false);
    }

    setTimeout(() => {
      props.handleFeedback(false);
    }, 1200);
  }

  return (
    <div className="target-select" style={props.style}>
      {props.characters.map(character => {
        return(
          <div key={character} onClick={() => checkCharacterLocation(character)}>
            <img src={characterImages[character]} alt="" />
            <span>{character}</span>
          </div>
        );
      })}
    </div>
  )
  
}

export { TargetSelect };