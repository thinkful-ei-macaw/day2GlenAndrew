'use strict';

let loaf = {
  flour: 300,
  water: 210
};

console.log(loaf.flour, loaf.water);

loaf.hydration = function() {return loaf.water / loaf.flour * 100;};

console.log(loaf.hydration());

// 2 Iterating over an object's properties

let obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
};

for(const key in obj) {
  console.log(obj[key]);
}

// 3. Arrays in objects
const food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper' ]
};

console.log(food.meals[3]);

// 4. Arrays of objects
const work = [ { name: 'Bob', jobTitle: 'Accountant' },
  { name: 'Steve', jobTitle: 'Pilot' },
  { name: 'Phil', jobTitle: 'Psychologist' },
  { name: 'Micky', jobTitle: 'Firefighter' },
  { name: 'Kobe', jobTitle: 'Mamba' }
];

for( let i = 0; i < work.length; i++ ) {
  console.log(`${work[i].name} the ${work[i].jobTitle}`);
}

// 5. Properties that aren't there

const job = [ { name: 'Bob', jobTitle: 'Accountant', boss: 'Rex' },
  { name: 'Steve', jobTitle: 'Pilot', boss: 'Reggie' },
  { name: 'Phil', jobTitle: 'Psychologist', boss: 'Bob'},
  { name: 'Micky', jobTitle: 'Firefighter', boss: 'Harlan'},
  { name: 'Kobe', jobTitle: 'Mamba' }
];

for( let i = 0; i < job.length; i++ ) {
  if(job[i].name === 'Kobe') {
    console.log(`${job[i].jobTitle} ${job[i].name} doesn't report to anybody`);
  } else {
    console.log(`${job[i].jobTitle} ${job[i].name} reports to ${job[i].boss}`);
  }    
    
}

// 6. Cracking the code

function decode(word) {
  let obj = { a: 2, b: 3, c: 4, d: 5};
  let newLetter = word[0];
  return obj[newLetter] ? word.charAt(obj[newLetter] - 1) : ' ';
}

function decodeWords(words) {
  let newStr = "";
  let newer = words.split(" ");
  for( let i = 0; i < newer.length; i++ ) {
    newStr += decode(newer[i]);
  }
  return newStr;
}

console.log(decodeWords("craft block argon meter bells brown croon droop"));

// 7.  Factory Functions with LOTR

function createCharacter(character) {
  return {
    name: character.name,
    nickname: character.nickname,
    race: character.race,
    origin: character.origin,
    attack: character.attack,
    defense: character.defense,
    describe: function() {
      console.log(`${character.name} is a ${character.race} from ${character.origin}.`);
    },
    evaluateFight: function(opponent) {
      let x = character.defense > this.attack ? 0 : this.attack - character.defense; 
      let y = character.attack < this.defense ? 0 : character.attack - this.defense;
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    },
  };
}

const characters = [
  { 
    name: 'Gandalf the White',
    nickname: 'gandalf',
    race: 'Wizard',
    origin: 'Middle Earth',
    attack: 10,
    defense: 6
  },
  {
    name: 'Bilbo Baggins',
    nickname: 'bilbo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 2,
    defense: 1  
  },
  {
    name: 'Frodo Baggins',
    nickname: 'frodo',
    race: 'Hobbit',
    origin: 'The Shire',
    attack: 3,
    defense: 2
  },
  {
    name: 'Aragorn son of Arathorn',
    nickname: 'aragorn',
    race: 'Man',
    origin: 'Dunnedain',
    attack: 6,
    defense: 8
  },
  {
    name: 'Legolas',
    nickname: 'legolas',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 5
  },
  {
    name: 'Arwen Undomiel',
    nickname: 'arwen',
    race: 'Elf',
    origin: 'Woodland Realm',
    attack: 8,
    defense: 8
  }
];

characters.find( person => person.name === 'Aragorn son of Arathorn' ? createCharacter(person).describe() : undefined );
let hobbits = characters.filter( person => person.race === 'Hobbit');
let attack = characters.filter( person => person.attack > 5);
// console.log(hobbits);
// console.log(attack);

// 8. BONUS: A Database Search

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query) {
  const key = Object.keys(query);
  let result = arr.find(item => key.every(idx => item[idx] === query[idx]));
  return result === undefined ? null : result;
}

const first = findOne(HEROES, { id: 5, squad:'Justice League' });
console.log(first);

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(id) {
    return this.store.heroes.find(x => x.id === id.id)
  }
};

console.log(Database.findOne({ id: 2 }));