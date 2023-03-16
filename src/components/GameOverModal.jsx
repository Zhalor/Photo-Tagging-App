function GameOverModal(props) {
  
  return (
    <div className="modal-wrapper">
      <div className="game-over-modal">
        <span>Winner Winner, Chicken Dinner!</span>
        <div>
          <button onClick={() => props.setLevel('Level Select')}>Home</button>
        </div>
      </div>
    </div>
  )
  
}

export { GameOverModal };