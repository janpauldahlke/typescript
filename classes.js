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
var student1 = new Student(); // TSC errors here, it wants fresh arguembts
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
//# sourceMappingURL=classes.js.map