function Header(props) {
  return (
    <div className="header">
      {props.level === 'Level Select' ? 
      <div>
        <span>High Scores</span>
        <h1>Select Level</h1>
        <span>About</span>
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