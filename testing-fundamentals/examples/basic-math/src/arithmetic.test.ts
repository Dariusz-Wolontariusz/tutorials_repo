import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from './arithmetic'

describe('add', () => {
  it.skip('adds two numbers', () => {
    expect(add(9, 4)).toBe(13)
  })

  it('adds two negative numbers', () => {
    expect(add(-5, -9)).toBe(-14)
  })

  it('parses numeric strings', () => {
    expect(add('22', '3')).toBe(25)
  })

  it('throws if second string cannot be parsed', () => {
    expect(() => add('6', 'potato')).toThrow('not a number')
  })

  it('throws if first string cannot be parsed', () => {
    expect(() => add('tomato', 5)).toThrow('not a number')
  })
})

describe('subtract', () => {
  it('subtracts two numbers', () => {
    expect(subtract(25, 15)).toBe(10)
  })

  it('subtracts two negative numbers', () => {
    expect(subtract(-5, -4)).toBe(-1)
  })

  it('parses numeric strings', () => {
    expect(subtract('22', '3')).toBe(19)
  })

  it('throws if argument cannot be parsed', () => {
    expect(() => subtract('6', true)).toThrow('not a number')
  })

  it('throws if argument is not a number', () => {
    expect(() => subtract([33, 55], 5)).toThrow('not a number')
  })
})

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20)
  })

  it('multiplies negative numbers', () => {
    expect(multiply(-4, -5)).toBe(20)
  })

  it('multiplies by zero', () => {
    expect(multiply(-4, 0)).toBe(0)
  })

  it('parses numeric strings', () => {
    expect(multiply(6, '-5')).toBe(-30)
  })

  it('throws if string cannot be parsed', () => {
    expect(() => multiply('onion', 5)).toThrow('not a number')
  })

  it('throws if argument is not a number', () => {
    expect(() => multiply(false, 5)).toThrow('not a number')
  })
})

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(9, 3)).toBe(3)
  })

  it('divides by a negative number', () => {
    expect(divide(9, -3)).toBe(-3)
  })

  it('divides two negative numbers', () => {
    expect(divide(-9, -3)).toBe(3)
  })

  it('parses numeric strings', () => {
    expect(divide(30, '-5')).toBe(-6)
  })

  it('throws if string cannot be parsed', () => {
    expect(() => divide('salsa', 5)).toThrow('not a number')
  })

  it('throws if argument is not a number', () => {
    expect(() => divide(false, 5)).toThrow('not a number')
  })

  it('throws on division by zero', () => {
    expect(() => divide(0, 6)).toThrow('divide by 0')
  })
})
