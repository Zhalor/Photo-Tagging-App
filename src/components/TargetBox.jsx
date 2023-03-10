import { db, collection, doc, getDoc } from '../firebase.js';

function TargetSelect(props) {

  async function getCharacterLocation(character) {
    props.setIsFeebackVisable(true);
    props.setStyle({display: 'none'});
    const snapshot = await getDoc(doc(db, 'Level 1', character));
    const charCoords = snapshot.data();

    if(props.xLocation > charCoords.xStart && props.xLocation < charCoords.xEnd 
      && props.yLocation > charCoords.yStart && props.yLocation < charCoords.yEnd) {
        console.log('Winner Winner Chicken Dinner!');
        const arr = props.characters.filter(char => char !== character);
        props.setCharacters(arr);
    }
    setTimeout(() => {
      props.setIsFeebackVisable(false);
    }, 2000);
  }

  return (
    <div className="target-select" style={props.style}>
      {props.characters.map(character => {
        return(
          <div key={character}>
            <img src="" alt="" />
            <span onClick={() => getCharacterLocation(character)}>{character}</span>
          </div>
        );
      })}
    </div>
  )
  
}

export { TargetSelect };