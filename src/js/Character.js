export default class Character {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
  
      this.checkName();
      this.checkType();
      this.statsCharacter();
    }
  
    checkName() {
      if ((this.name.length < 2) || (this.name.length > 10)) {
        throw new Error('Unexpected "name": min - 2, max - 10');
      }
    }
  
    checkType() {
      const typeOf = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Daemon',
        'Undead',
        'Zombie',
      ];
  
      if (!typeOf.includes(this.type)) {
        throw new Error('Unexpected "type" of character');
      }
    }
  
    statsCharacter() {
      const stats = {
        Bowman: { attack: 25, defence: 25 },
        Swordsman: { attack: 40, defence: 10 },
        Magician: { attack: 10, defence: 40 },
        Undead: { attack: 25, defence: 25 },
        Zombie: { attack: 40, defence: 10 },
        Daemon: { attack: 10, defence: 40 },
      };
  
      this.attack = stats[this.type].attack;
      this.defence = stats[this.type].defence;
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