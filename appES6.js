//In this version we are using an ES6 Class, see app.js for the function constructor version

//Emitter ('events') gives us event listener functiionality
//Unlike app.js, we don't need util.iherits since the ES6 extends takes care of 
//the prototypal "inheritance". NOTE: prototypes are really more like delegates :)
const Emitter = require('events');

class Car extends Emitter{
    constructor(name) {
        super();
        this.Name = name;    
    }

    go() {
        console.log(`${ this.Name } is going!` ); // template literal
        this.emit("go", "passed in");
        return this;
    }

    goFaster() {
        console.log(`${ this.Name } is going faster!`);
        this.emit("goFaster");
        return this;
    }
}

let x = new Car("buggy");
x.on("go", (data) => {console.log("(from listener) the car is going"); console.log('(from listener) ' + data); });
x.on("goFaster", () => console.log("(from listener) now its going faster!"));
x.go().goFaster();