"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//be as explicit as possbile
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
    withdraw: function (value) {
        this.money -= value;
    }
};
var mySelf = {
    name: 'Pau.l',
    bankAccount: bankAccount,
    hobbies: ['Coding', 'Gaming']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf.bankAccount.money);
mySelf.bankAccount.withdraw(100);
console.log(mySelf.bankAccount.money);
//having a look at compiled TS
var myName = 'Paul';
//myName = 27 // it is compiled to working JS BUT the TSC errors
console.log(typeof myName);
//noImplicitAny: false
var beAnything;
beAnything = 24;
//noImplicitAny: ture
//TS 2.0
// no unUsedParameter = true
// strictNullCheck, else on result would be implicit null because no assign
function controlMe(isTrue /*, somethingElse: boolean */) {
    var result;
    return isTrue ? result = 12 : result = 11; // result only is not workking on TSC 2.0
}
console.log('42');
//block scoped variable delaration
//let && const
//var is global scope
var variable = "test";
console.log(variable);
variable = "new Test";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
//maxLevel = 110 // cannot reassign immutable data structure
var minLevel = 20;
minLevel = 10;
function reset() {
    var variable = null;
    console.log(variable); // this will not log global but localy declared let
}
reset();
//default arguemnts
// set the default value on type number
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('end');
};
countDown(2);
//rest and spread
var numbers = [1, 5, 98, -7]; // array
console.log(Math.max(1, 5, 99, -7)); // not an array but a list of numbers
//console.log(Math.max(numbers)) //TS error
console.log(Math.max.apply(Math, numbers));
//rest operator
function makeArray( /*name : string,*/) {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3, 4));
//destructering
var myHobbies = ['Coding', 'Gaming', 'Snuggeling'];
var myHobby1 = myHobbies[0]; // the old way
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var UserBlog = {
    author: 'Paul',
    subheadline: 'Lorem',
    display: true,
};
//on destructering the desctructred type has to be of the type of the object
var author = UserBlog.author;
console.log(author);
// es6 TS rewrite into 
// var double = function(value) {
//   return value * 2;
// };
// console.log(double(10));
// // Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
// // Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
// // Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
// // Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
// // Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
// ___________________
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet = function (name) {
    if (name === void 0) { name = "Paul"; }
    //if (name === undefined) { name = "Max"; } this can now be removed
    console.log("Hello, " + name);
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersBUTCAREYOURSCOPEINOTHERFILESLOLOLOL = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbersBUTCAREYOURSCOPEINOTHERFILESLOLOLOL));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbersBUTCAREYOURSCOPEINOTHERFILESLOLOLOL);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
var scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var Person = /** @class */ (function () {
    function Person(firstName) {
        //setting them default is possible like this
        this.age = 42;
        this.firstName = firstName;
    }
    //methods also follow the 
    /*
      public
      private
      protected pattern
    */
    Person.prototype.printType = function () {
        return this.type;
    };
    Person.prototype.setType = function (type) {
        this.type = type;
    };
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    return Person;
}());
var paul = new Person('Paul');
console.log(paul, paul.firstName /* because firstName is visible = public, but we cannot access type or age here, because its keywords*/);
// a way to typecheck! sweet!!
if (paul instanceof Person) {
    console.log('Paul is instance of person', paul instanceof Person);
}
paul.setAge(12);
paul.printAge();
paul.setType('superUser');
console.log(paul.printType());
console.log('____', paul);
// inheritance
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    //firstName = 'StudentClassName' // this makes student1 console.log = undefined
    function Student(name) {
        // needs to be called to call parent class
        return _super.call(this, name) || this;
        //console.log(this.type) because type is private!
    }
    return Student;
}(Person));
var student1 = new Student(/*prevent me an error*/ 'aa'); // TSC errors here, it wants fresh arguembts
var student2 = new Student('providesAName');
console.log(student1);
console.log(student2); // but this name will be still overwritten from inside the student class!
student1.setAge(122);
student1.setType('FOOTYPE'); // this is private and shouldnt work
console.log(student1);
//setters and getters 
// the old way
var Animal = /** @class */ (function () {
    function Animal() {
        this.SpeciesError = function () {
            throw Error('Make sure your species is long enough');
        };
    }
    Animal.prototype.setSpecies = function (value) {
        value.length > 4 ? this._species = value : this.SpeciesError();
    };
    Animal.prototype.getSpecies = function () {
        return this._species;
    };
    return Animal;
}());
try {
    var Ape = new Animal();
    Ape.setSpecies('Ape');
}
catch (error) {
    console.log(error);
}
var Nautilus = new Animal();
Nautilus.setSpecies('Nautilus');
console.log(Nautilus.getSpecies);
var Plant = /** @class */ (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        //nice and handy reminds onto vue setter getter!
        set: function (value) {
            value.length > 3 ? this._species = value : this._species = 'DEFAULT';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var dontTouch = new Plant();
console.log('plant1', dontTouch.species);
dontTouch.species = 'NO';
console.log('plant2', dontTouch.species);
dontTouch.species = 'MIMOSA PUDICA';
console.log(dontTouch.species);
// about STATIC
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calculateCircum = function (diameter) {
        return diameter * this.PI;
    };
    Helpers.calculateArea = function (diameter) {
        return Math.pow((diameter / 2), 2) * this.PI;
    };
    Helpers.PI = 3.1415;
    return Helpers;
}());
// statics to call
console.log(Helpers.PI * 3);
console.log(Helpers.calculateArea(5));
console.log(Helpers.calculateCircum(8));
//abstract classes
// they can be only inheriated
// can provide basic setup
var Movie = /** @class */ (function () {
    function Movie() {
        this.movieTitle = 'SOMEDEFAULT';
        this.budget = 100;
    }
    Movie.prototype.calculateBudget = function (exchange) {
        this.budget = exchange * this.budget;
    };
    return Movie;
}());
var SciFyMovie = /** @class */ (function (_super) {
    __extends(SciFyMovie, _super);
    function SciFyMovie() {
        return _super.call(this) || this;
    }
    SciFyMovie.prototype.changeTitle = function (newTitle) {
        this.movieTitle = newTitle;
    };
    return SciFyMovie;
}(Movie));
var Interstellar = new SciFyMovie();
console.log(Interstellar);
Interstellar.changeTitle('INTERSTELLAR');
Interstellar.calculateBudget(1.14);
console.log(Interstellar);
//  private constructors
//  use this to singleton class
//  this provides only one instance during runtime
var OnlyOne = /** @class */ (function () {
    // public readonly name : string;
    function OnlyOne(name) {
        this.name = name;
        // line 174 would need this
        //this.name = name
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            // so this pattern ensures us, that there can be no other instances created from outside
            OnlyOne.instance = new OnlyOne('THERE CAN BE ONLY ONE');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//const wrong = new OnlyOne('THE ONLY ONE? NOPE'); // not working
var right = OnlyOne.getInstance();
//  the READONLY properties
console.log(right.name);
//right.name = 'YOUR NAME IS HACKED' // readONLY will prevent such hacks nice and steady
console.log(right.name); // badass
// make it readonly by --> private constructor(public readonly name: string) {} in line 175
//BE AS TYPESCRIPTY AS YOU CAN
// // Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;
//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };
//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);
// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {chrom
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('TUUUUUUUUT');
    };
    Car.prototype.accelerate = function (value) {
        this.acceleration += value;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject(w, l) {
        if (w === void 0) { w = 0; }
        if (l === void 0) { l = 0; }
        this._width = w;
        this._length = l;
    }
    Object.defineProperty(baseObject.prototype, "width", {
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(baseObject.prototype, "length", {
        set: function (value) {
            this._length = value;
        },
        enumerable: true,
        configurable: true
    });
    return baseObject;
}());
;
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super.call(this) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this._length * this._width;
    };
    return Rectangle;
}(baseObject));
var obj = new Rectangle();
obj.width = 20;
obj.length = 30;
console.log(obj.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var persona = /** @class */ (function () {
    function persona( /*n: string*/) {
        //this._firstName = n || 'DEFAULTNAME'
    }
    Object.defineProperty(persona.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (n) {
            n.length > 3 ? this._firstName = n : this._firstName = 'SHoRTNAME';
        },
        enumerable: true,
        configurable: true
    });
    return persona;
}());
var pawl = new persona(); // constructor wants one argument here // look for a way to pass OPTIONAL ARGUMENTS IN TS !! a nice tasky task
pawl.firstName = 'pl';
console.log(pawl.firstName);
pawl.firstName = 'pawl';
console.log(pawl.firstName);
var myMathNamespace;
(function (myMathNamespace) {
    function calcRect(w, l) {
        return w * l;
    }
    myMathNamespace.calcRect = calcRect;
})(myMathNamespace || (myMathNamespace = {}));
var myMathNamespace;
(function (myMathNamespace) {
    // here are a lot of functions to calc how to reach global domination
    function calcWorld(arg) {
        return Math.floor(Math.random() * arg) + 42;
    }
    myMathNamespace.calcWorld = calcWorld;
})(myMathNamespace || (myMathNamespace = {}));
//how does one group this???
//namesspaces
//namespaces encapsulate their content
//one needs to export out of it! if one wants to use it outside
//consider const PI
// namespace mathFoo {
//   const PI = 3.1514
// //some random functions
//   export function calcCirc(diameter: number) : number {
//     return PI * diameter
//   }
//   export function calcRect(w: number, l: number) : number {
//     return w + l
//   }
//   export function calcWorld(arg: number) {
//     return Math.floor(Math.random() * 6) + 42 * arg
//   }
// }
// const PI = 2.99
// console.log(mathFoo.calcWorld(13))
// console.log(mathFoo.calcRect(2,10))
// console.log(mathFoo.calcCirc(4))
// //console.log(mathFoo.PI) // not exported = a TSC error // its scoped to the namespace
// console.log(PI) // in the global scope
// to be able to do this
// reconfigutre the tsconfig to outFile namespace.js
// or run tsc like this
// tsc --outFile namespace.js mathFoo/calcRectMath.ts mathFoo/calcWorldMath.ts namespaces.ts
// and keep in mind, that the order does matter here!!
// a better solution here is to import via TS own import synatx!
// its beatiful isnt it?
/// <reference path="mathFoo/calcRectMath.ts"/>
/// <reference path="mathFoo/calcWorldMath.ts"/>
// but one still needs to specify the outFile here
// but as it turns out this is not working, there must be another way!!
// https://stackoverflow.com/questions/35963346/only-amd-and-system-modules-are-supported-alongside-out
console.log(myMathNamespace.calcRect(10, 4));
console.log(myMathNamespace.calcWorld(5));
