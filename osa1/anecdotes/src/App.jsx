import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const VotedAnecdote = ({ votes }) => <p>has {votes} votes</p>

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

const Heading = ({ text }) => <h2>{text}</h2>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const randomIndex = () => Math.floor(Math.random() * anecdotes.length)

  const [selected, setSelected] = useState(randomIndex())
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNextAnecdote = () => setSelected(randomIndex())

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Heading text="Anecdote of the day" />
      <Anecdote anecdote={anecdotes[selected]} />
      <VotedAnecdote votes={votes[selected]} />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next anecdote" />
      <Heading text="Anecdote with most votes" />
      <Anecdote anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} />
      <VotedAnecdote votes={votes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

export default App