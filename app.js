//In this version we are using function constructors, see appES6.js for the ES6 version

//Emitter ('events') gives us event listener functiionality
//utils ('utils') is being used for inherits to attach the prototype from emitter to our new object.
//this allows our new object to delegate events to the event emitter prototype
const Emitter = require('events');

const utils = require('util');

function Car(name) {
    this.Name = name;
}

utils.inherits(Car, Emitter);

Car.prototype.go = function() {
    console.log(`${ this.Name } is going!` ); // template literal
    this.emit("go", "passed in");
    return this;
}

Car.prototype.goFaster = function() {
    console.log(`${ this.Name } is going faster!`);
    this.emit("goFaster");
    return this;
}

let x = new Car("buggy");
x.on("go", (data) => {console.log("(from listener) the car is going"); console.log('(from listener) ' + data); });
x.on("goFaster", () => console.log("(from listener) now its going faster!"));
x.go().goFaster();
