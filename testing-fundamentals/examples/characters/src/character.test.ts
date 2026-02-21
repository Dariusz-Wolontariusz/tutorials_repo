import { describe, it, expect } from 'vitest';
import { Character } from './character.js';
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

  it.todo('should allow you to increase the level', () => {});

  it.todo('should update the last modified date when leveling up', () => {});
});
