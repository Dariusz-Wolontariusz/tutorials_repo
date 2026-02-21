import { it, expect } from 'vitest';
import { generateFibonacci } from './fibonacci';

it('should generate fibonacci sequence', () => {
  const fibonacci = generateFibonacci(10);
  expect(fibonacci).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
