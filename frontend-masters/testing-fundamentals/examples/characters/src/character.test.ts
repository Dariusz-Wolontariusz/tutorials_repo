import { describe, it, expect } from 'vitest';
import { Character, levelUp } from './character.js';
import { Person } from './person.js';

describe('Character', () => {
  it('should create a character with a first name, last name, and role', () => {
    const forgot = new Character('Forgot', 'Shadowheart', 'Rogue');
    expect(forgot).toEqual({
      firstName: 'Forgot',
      id: expect.stringContaining('person-'),
      lastName: 'Shadowheart',
      role: 'Rogue',
      constitution: expect.any(Number),
      strength: expect.any(Number),
      dexterity: expect.any(Number),
      intelligence: expect.any(Number),
      wisdom: expect.any(Number),
      charisma: expect.any(Number),
      level: expect.any(Number),
      createdAt: expect.any(Date),
      lastModified: expect.any(Date),
    });
  });

  it('should allow you to increase the level', () => {
    const forgot = new Character('Forgot', 'Shadowheart', 'Rogue');
    forgot.levelUp();
    expect(forgot.level).toBe(2);
  });

  it('should update the last modified date when leveling up', () => {
    const forgot = new Character('Forgot', 'Shadowheart', 'Rogue');
    const initialLastModified = forgot.lastModified;
    forgot.levelUp();
    expect(forgot.lastModified).not.toBe(initialLastModified);
  });
});
