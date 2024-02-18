import Bowman from './Bowman.js';
import Magician from './Magician.js';
import Swordsman from './Swordsman.js';
import Daemon from './Daemon.js';
import Undead from './Undead.js';
import Zombie from './Zombie.js';

const player1 = new Bowman('Person1', 'Bowman');
console.log(player1);

const player2 = new Magician('Person2', 'Magician');
console.log(player2);

const player3 = new Swordsman('Person3', 'Swordsman');
console.log(player3);

const player4 = new Daemon('Person4', 'Daemon');
console.log(player4);

const player5 = new Undead('Person5', 'Undead');
console.log(player5);

const player6 = new Zombie('Person6', 'Zombie');
console.log(player6);