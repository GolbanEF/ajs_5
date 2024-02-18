import Character from './Character.js';

export default class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
  }

  levelUp() {
    return super.levelUp();
  }
}