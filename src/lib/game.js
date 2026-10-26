export const CHOICES = ['rock', 'paper', 'scissors']

// What each choice beats.
export const BEATS = {
  rock: ['scissors'],
  paper: ['rock'],
  scissors: ['paper'],
}

export function randomChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

export function getResult(player, house) {
  if (player === house) return 'draw'
  if (BEATS[player]?.includes(house)) return 'win'
  return 'lose'
}

export function applyScore(score, outcome) {
  if (outcome === 'win') return score + 1
  if (outcome === 'lose') return score - 1
  return score
}

export const CHOICE_META = {
  rock: { label: 'Rock', color: 'var(--red-600)', shadow: 'var(--red-800)' },
  paper: { label: 'Paper', color: 'var(--blue-500)', shadow: 'var(--blue-700)' },
  scissors: { label: 'Scissors', color: 'var(--gold-500)', shadow: 'var(--gold-600)' },
}