import ChoiceButton from './ChoiceButton.jsx'
import styles from './ResultView.module.css'

export default function ResultView({ player, house, outcome, onPlayAgain }) {
  const thinking = house === null

  const outcomeLabel =
    outcome === 'win' ? 'YOU WIN' : outcome === 'lose' ? 'YOU LOSE' : outcome === 'draw' ? 'DRAW' : ''

  return (
    <section className={styles.result} aria-label="Game result">
      <div className={styles.column}>
        <h2 className={styles.label}>YOU PICKED</h2>
        <ChoiceButton choice={player} size="lg" winner={outcome === 'win'} />
      </div>

      {!thinking && (
        <div className={styles.outcome}>
          <p className={styles.outcomeText}>{outcomeLabel}</p>
          <button className={styles.playAgain} onClick={onPlayAgain} type="button">
            PLAY AGAIN
          </button>
        </div>
      )}

      <div className={styles.column}>
        <h2 className={styles.label}>THE HOUSE PICKED</h2>
        {thinking ? (
          <div className={styles.placeholder} aria-label="House is choosing" />
        ) : (
          <ChoiceButton choice={house} size="lg" winner={outcome === 'lose'} />
        )}
      </div>
    </section>
  )
}