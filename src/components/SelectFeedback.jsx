function SelectFeedback(props) {
  
  return (
    <div>
      {props.found === true ? 
      <div className="select-feeback" style={{background: 'green'}}>
        Correct!
      </div> :
      <div className="select-feeback" style={{background: 'red'}}>
        Incorrect
      </div>}
    </div>
  )
  
}

export { SelectFeedback };