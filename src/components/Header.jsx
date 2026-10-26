import styles from './Header.module.css'

export default function Header({ score }) {
  return (
    <header className={styles.header}>
      <div className={styles.title} aria-label="Rock Paper Scissors">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className={styles.scoreBox}>
        <span className={styles.scoreLabel}>SCORE</span>
        <span className={styles.scoreValue}>{score}</span>
      </div>
    </header>
  )
}