

function Header(props) {
  return (
    <div className="header">
      <button className="home-btn">Return Home</button>
      <h1>Where's Waldo?</h1>
      <button className="counter-btn">{props.characters.length}</button>
    </div>
  )
  
}

export { Header };