import { useState } from 'react'

const Heading = ({ text }) => <h1>{text}</h1>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => {
  return(
  <tbody>
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  </tbody>
  )
}
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  
  if (all === 0) {
    return <p>No feedback given</p>
  }
  
  const avarage = (good - bad) / all
  const positive = good / all * 100
  
  return (
    <div>
      <Heading text='statistics'/>
      <table>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={avarage} />
      <StatisticLine text='positive' value={positive + ' %'} />
      </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='give feedback'/>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App