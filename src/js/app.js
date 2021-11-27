import Team from './Team';
import Bowman from './characters/Bowman';
import canIterate from './canIterate';

const team = new Team();

const archer = new Bowman('Archer');
const elf = new Bowman('Elf');
team.add(archer);
team.add(elf);

console.log(canIterate(team)); // true
console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate('Netology'));// true
