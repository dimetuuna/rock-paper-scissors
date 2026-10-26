import { useEffect, useRef } from 'react'
import styles from './RulesModal.module.css'

export default function RulesModal({ open, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleClose = () => onClose()
    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="rules-title">
      <div className={styles.header}>
        <h2 id="rules-title" className={styles.title}>
          RULES
        </h2>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close rules"
        >
          <img src="/images/icon-close.svg" alt="" />
        </button>
      </div>
      <img className={styles.rulesImage} src="/images/image-rules.svg" alt="Game rules" />
    </dialog>
  )
}