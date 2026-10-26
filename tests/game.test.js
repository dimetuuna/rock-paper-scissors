import { describe, it, expect } from 'vitest'
import { CHOICES, BEATS, getResult, applyScore, randomChoice } from '../src/lib/game.js'

describe('getResult', () => {
  it('returns draw for same choice', () => {
    expect(getResult('rock', 'rock')).toBe('draw')
  })
  it('paper beats rock', () => {
    expect(getResult('paper', 'rock')).toBe('win')
    expect(getResult('rock', 'paper')).toBe('lose')
  })
  it('rock beats scissors', () => {
    expect(getResult('rock', 'scissors')).toBe('win')
    expect(getResult('scissors', 'rock')).toBe('lose')
  })
  it('scissors beats paper', () => {
    expect(getResult('scissors', 'paper')).toBe('win')
    expect(getResult('paper', 'scissors')).toBe('lose')
  })
})

describe('applyScore', () => {
  it('increments on win', () => expect(applyScore(3, 'win')).toBe(4))
  it('decrements on lose', () => expect(applyScore(3, 'lose')).toBe(2))
  it('unchanged on draw', () => expect(applyScore(3, 'draw')).toBe(3))
})

describe('randomChoice', () => {
  it('returns a valid choice', () => {
    for (let i = 0; i < 50; i++) {
      expect(CHOICES).toContain(randomChoice())
    }
  })
})

describe('BEATS consistency', () => {
  it('every choice beats exactly one', () => {
    for (const c of CHOICES) {
      expect(BEATS[c]).toHaveLength(1)
    }
  })
})