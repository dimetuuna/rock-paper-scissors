import { CHOICE_META } from '../lib/game.js'
import styles from './ChoiceButton.module.css'

export default function ChoiceButton({ choice, size = 'md', winner = false, onClick, disabled = false }) {
  const meta = CHOICE_META[choice]
  if (!meta) return null

  const sizeClass = size === 'lg' ? styles.lg : styles.md

  return (
    <button
      type="button"
      className={`${styles.choice} ${sizeClass} ${winner ? styles.winner : ''}`}
      style={{ '--color': meta.color, '--shadow': meta.shadow }}
      onClick={onClick}
      disabled={disabled}
      aria-label={meta.label}
    >
      <span className={styles.inner}>
        <img src={`/images/icon-${choice}.svg`} alt="" />
      </span>
    </button>
  )
}