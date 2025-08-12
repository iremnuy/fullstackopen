import { useState } from 'react'


const Statistics = (props) => {
  if (props.bad+props.good+props.neutral === 0) { //neither button is clicked
    return <div> No feedback given </div>
  }

  return (
    <div>
      <h1>statistics</h1>
      <div>all {props.good + props.neutral + props.bad}</div>
      <div> average score {(props.good - props.bad) / (props.good+props.neutral+props.bad)}</div>
      <div>positive {props.good / (props.good + props.neutral + props.bad) * 100} %</div>
    </div>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App