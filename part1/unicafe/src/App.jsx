import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <button onClick={handleGoodClick}>good</button> 
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <div>all {good + neutral + bad}</div>
      <div> average score {(good - bad) / (good+neutral+bad)}</div>
      <div>positive {good / (good + neutral + bad) * 100} %</div>
    </div>
  )
}

export default App