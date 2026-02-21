import { beforeEach, expect, it, describe } from 'vitest';
import { counter } from './counter';

// For added fun, we can try `describe.shuffle`.
describe.shuffle('Counter', () => {
  beforeEach(() => {
  counter.reset()
  })

  it('starts at zero', () => {
    expect(counter.value).toBe(0);
  });


  it('can increment', () => {
    counter.increment();
    expect(counter.value).toBe(1);
  });

  it('can decrement', () => {
    counter.decrement();
    expect(counter.value).toBe(-1);
  });

  it('can increment multiple times', () => {
    counter.increment()
    counter.increment()
    counter.increment()
    counter.increment()
    expect(counter.value).toBe(4)
  })

  it('can reset', () => {
    counter.reset()
    expect(counter.value).toBe(0)
  })

  it('can decrement', () => {
    counter.increment();
    counter.decrement();
    expect(counter.value).toBe(0);
  });
});
