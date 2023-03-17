import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className="header">
      {props.level === 'Level Select' || props.level === null ? 
      <div>
        <Link to='/highscores'>High Scores</Link>
        <Link to='/' className='home'>Level Select</Link>
        <Link to='/about'>About</Link>
      </div> : 
      <div>
        <button className="home-btn" onClick={() => props.setLevel('Level Select')}>Return Home</button>
        <h1 style={{color: 'white'}}>Find the {props.level} Characters!</h1>
        <button className="counter-btn">{props.characters.length}</button>
      </div>}
    </div>
  )
  
}

export { Header };