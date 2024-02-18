import Character from '../js/Character.js';

test('Name < 2 symbols ERROR', () => {
  expect(() => {
    const char = new Character('Z', 'Magic');
  }).toThrow(new Error('Unexpected "name": min - 2, max - 10'));
});

test('Name > 10 symbols ERROR', () => {
  expect(() => {
    const char = new Character('Rockamicrophone', 'Magic');
  }).toThrow(new Error('Unexpected "name": min - 2, max - 10'));
});

test('Type ERROR', () => {
  expect(() => {
    const char = new Character('Player', 'Hunter');
  }).toThrow(new Error('Unexpected "type" of character'));
});

const dataArr = [
  ['Bowman', { attack: 25, defence: 25 }],
  ['Swordsman', { attack: 40, defence: 10 }],
  ['Magician', { attack: 10, defence: 40 }],
  ['Undead', { attack: 25, defence: 25 }],
  ['Zombie', { attack: 40, defence: 10 }],
  ['Daemon', { attack: 10, defence: 40 }],
];

test.each(dataArr)('Get stats testing %s', (type, stats) => {
  const char = new Character('Player', type);
  const result = { attack: char.attack, defence: char.defence };
  expect(result).toEqual(stats);
});

test('levelUp if health = 0', () => {
  expect(() => {
    const char = new Character('Player', 'Magician');
    char.health = 0;
    char.levelUp();
  }).toThrow(new Error('Can`t level up of dead character'));
});

test('levelUp if health > 0', () => {
  const char = new Character('Player', 'Bowman');
  char.levelUp();
  const result = [char.attack, char.defence];
  expect(result).toEqual([30, 30]);
});

test('damage if health = 0', () => {
  expect(() => {
    const char = new Character('Player', 'Bowman');
    char.health = 0;
    char.damage(10);
  }).toThrow(new Error('You are dead'));
});

test('damage if health > 0', () => {
  const char = new Character('Player', 'Bowman');
  char.damage(20);
  expect(char.health).toBe(85);
});