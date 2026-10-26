import ChoiceButton from './ChoiceButton.jsx'
import styles from './GameBoard.module.css'

export default function GameBoard({ onChoose }) {
  return (
    <div className={styles.board}>
      <img className={styles.triangle} src="/images/bg-triangle.svg" alt="" aria-hidden="true" />
      <div className={`${styles.slot} ${styles.paper}`}>
        <ChoiceButton choice="paper" onClick={() => onChoose('paper')} />
      </div>
      <div className={`${styles.slot} ${styles.scissors}`}>
        <ChoiceButton choice="scissors" onClick={() => onChoose('scissors')} />
      </div>
      <div className={`${styles.slot} ${styles.rock}`}>
        <ChoiceButton choice="rock" onClick={() => onChoose('rock')} />
      </div>
    </div>
  )
}