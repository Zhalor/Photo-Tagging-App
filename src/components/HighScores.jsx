import { useState } from "react"
import { Header } from "./Header"
import { ScoreSelect } from "./ScoreSelect";
import { Score } from "./Score";

function HighScores() {

  const [scores, setScores] = useState([]);
  
  return (
    <div className='container'>
      <Header 
          characters={null}
          level={null}
          setLevel={null} 
      />
      <ScoreSelect
        setScores={setScores}
        scores={scores}
      />
      <div className="score-container">
        <h2>Top Scores</h2>
        {scores.map(score => {
            return <Score score={score} />
          })
        }
      </div>
    </div>
  )
}

export { HighScores }