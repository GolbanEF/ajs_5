import Character from './Character.js';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  }

  levelUp() {
    return super.levelUp();
  }
}