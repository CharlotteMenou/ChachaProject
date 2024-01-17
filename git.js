// git.js
console.log('Hello, world!');

const operand = 12;
const operand2 = 45;

let result = operand + operand2;

console.log("resultat de" + operand + "+" + operand2 + "=" + result);

b += a ;
console.log("resultat de a + b = " + b);

let aPerson = { 
	name: 'Jean',
	age: 35,
	gender: 'masculin',
	interest: ['musique', 'Jeux videos'],
};

// on peut également déclarer et initialiser un objet de la façon suivante :

let laPerson = new Object();
laPerson.name = 'Jean';
laPerson.age = 35;
laPerson.gender = 'masculin';
laPerson.interest = ['musique', 'badminton'];

aPerson.sayHello = function() {console.log('Bonjour ! Je suis ' + this.name + '.'); };

laPerson.sayHello();
