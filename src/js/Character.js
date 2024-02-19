export default class Character {
    constructor(name, type) {
      const typeOf = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ];

      if ((this.name.length < 2) || (this.name.length > 10)) {
        throw new Error('Unexpected "name": min - 2, max - 10');
      }

      if (!typeOf.includes(this.type)) {
        throw new Error('Unexpected "type" of character');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = undefined;
      this.defence = undefined;
    }
  
    levelUp() {
      if (this.health > 0) {
        this.health = 100;
        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        return;
      }
      throw new Error('Can`t level up of dead character');
    }
  
    damage(points) {
      if (this.health > 0) {
        this.health -= points * (1 - this.defence / 100);
        return;
      }
      throw new Error('You are dead');
    }
  }