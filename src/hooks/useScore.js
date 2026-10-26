import { useEffect, useState } from 'react'

const STORAGE_KEY = 'rps-score'

function readScore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === null) return 0
    const n = Number(raw)
    return Number.isFinite(n) ? n : 0
  } catch {
    return 0
  }
}

export function useScore() {
  const [score, setScore] = useState(readScore)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(score))
    } catch {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }, [score])

  return [score, setScore]
}