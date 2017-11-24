let events = require('events');
let eventEmitter = new events.EventEmitter();

var eat = function() {
	console.log('Onlyforhebe is hungry so he wants some food.');
	eventEmitter.emit('hamburger');
}

var drink = function() {
	console.log('Onlyforhebe is thirst so he wants some water.');
	eventEmitter.emit('coke');
}

var hamburger = function() {
	console.log('Onlyforhebe buys a hamburger.');
}

var coke = function(){
	console.log('Onlyforhebe buys a bottle of coke.');
}

eventEmitter.on('hungry', eat);
eventEmitter.on('thirst', drink);
eventEmitter.on('hamburger', hamburger);
eventEmitter.on('coke', coke);

eventEmitter.emit('hungry');
eventEmitter.emit('thirst');