import { db, collection, doc, getDoc } from '../firebase.js';

function TargetSelect(props) {

  async function getCharacterLocation(e) {
    props.setStyle({display: 'none'});
    const snapshot = await getDoc(doc(db, 'Level 1', 'Waldo'));
    const charCoords = snapshot.data();
    console.log(props.xLocation, props.yLocation);
    if(props.xLocation > charCoords.xStart && props.xLocation < charCoords.xEnd 
      && props.yLocation > charCoords.yStart && props.yLocation < charCoords.yEnd) {
        console.log('Winner Winner Chicken Dinner!');
    }
  }

  return (
    <div className="target-select" style={props.style}>
      <div>
        <img src="" alt="" />
        <span onClick={getCharacterLocation}>Waldo</span>
      </div>
      <div>
        <img src="" alt="" />
        <span>Wizard</span>
      </div>
      <div>
        <img src="" alt="" />
        <span>Wally</span>
      </div>
    </div>
  )
  
}

export { TargetSelect };