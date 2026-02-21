export const add = (a, b): number => {
  a = typeof a === 'string' ? +a : a
  b = typeof b === 'string' ? +b : b

  if (isNaN(a) || typeof a !== 'number')
    throw new Error('The first argument is not a number.')
  if (isNaN(b) || typeof b !== 'number')
    throw new Error('The second argument is not a number.')
  return a + b
}

export const subtract = (a, b): number => {
  a = typeof a === 'string' ? +a : a
  b = typeof b === 'string' ? +b : b

  if (isNaN(a) || typeof a !== 'number')
    throw new Error('The first argument is not a number.')
  if (isNaN(b) || typeof b !== 'number')
    throw new Error('The second argument is not a number.')
  return a - b
}

export const multiply = (a, b): number => {
  a = typeof a === 'string' ? +a : a
  b = typeof b === 'string' ? +b : b

  if (isNaN(a) || typeof a !== 'number')
    throw new Error('First argument is not a number.')
  if (isNaN(b) || typeof b !== 'number')
    throw new Error('Second argument is not a number.')

  const result = a * b
  return result === 0 ? 0 : result
}

export const divide = (a, b): number => {
  a = typeof a === 'string' ? +a : a
  b = typeof b === 'string' ? +b : b

  if (a === 0 || b === 0) throw new Error('It is not allowed to divide by 0')

  if (isNaN(a) || typeof a !== 'number')
    throw new Error('First argument is not a number.')
  if (isNaN(b) || typeof b !== 'number')
    throw new Error('Second argument is not a number.')

  return a / b
}
