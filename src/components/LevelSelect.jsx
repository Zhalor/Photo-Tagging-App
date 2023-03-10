function LevelSelect(props) {
  
  return (
   <div>
    <button onClick={() => {
      props.setlevel('Level 1');
      props.setCharacters(['Waldo'])
      }}>Level 1</button>
   </div>
  )
}

export { LevelSelect }
