import { useState } from 'react'
import Header from './components/Header.jsx'
import GameBoard from './components/GameBoard.jsx'
import ResultView from './components/ResultView.jsx'
import RulesModal from './components/RulesModal.jsx'
import { useScore } from './hooks/useScore.js'
import { applyScore, getResult, randomChoice } from './lib/game.js'
import styles from './App.module.css'

export default function App() {
  const [phase, setPhase] = useState('idle') // idle | result
  const [player, setPlayer] = useState(null)
  const [house, setHouse] = useState(null)
  const [outcome, setOutcome] = useState(null)
  const [score, setScore] = useScore()
  const [showRules, setShowRules] = useState(false)

  const handleChoose = (choice) => {
    const h = randomChoice()
    const o = getResult(choice, h)
    setPlayer(choice)
    setHouse(h)
    setOutcome(o)
    setScore((s) => applyScore(s, o))
    setPhase('result')
  }

  const handlePlayAgain = () => {
    setPhase('idle')
    setPlayer(null)
    setHouse(null)
    setOutcome(null)
  }

  const outcomeText =
    outcome === 'win' ? 'You win' : outcome === 'lose' ? 'You lose' : outcome === 'draw' ? 'Draw' : ''

  return (
    <div className="app">
      <Header score={score} />
      {phase === 'idle' ? (
        <GameBoard onChoose={handleChoose} />
      ) : (
        <ResultView
          player={player}
          house={house}
          outcome={outcome}
          onPlayAgain={handlePlayAgain}
        />
      )}
      <button
        type="button"
        className={styles.rulesButton}
        onClick={() => setShowRules(true)}
      >
        RULES
      </button>
      <RulesModal open={showRules} onClose={() => setShowRules(false)} />
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {outcomeText}
      </div>
      <footer className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. Coded by{' '}
        <a href="https://github.com/dimetuuna">Pablo</a>.
      </footer>
    </div>
  )
}