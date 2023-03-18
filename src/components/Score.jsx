function Score(props) {

  return (
    <div className="score">
      <span>{props.score.name}</span>
      <span>{props.score.score}</span>
    </div>
  )
}

export { Score }