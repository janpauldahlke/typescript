"use strict";
/*
  to enable then set the tsc option
   "experimentalDecorators": true,
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//example of this ts feature
//to write a class decorator TS always passes a constructorfunction as agrument
function logged(constructorFn) {
    console.log(constructorFn);
}
//function decorators might need other arguements, lets see
//consume the decorator like this
var Persona = /** @class */ (function () {
    function Persona() {
        console.log('hi');
    }
    Persona = __decorate([
        logged
    ], Persona);
    return Persona;
}());
//  factory
// this is a way to wrap the decorator in a functio to show/unshow it
function logging(value) {
    return value ? logged : null;
}
var AnotherCar = /** @class */ (function () {
    function AnotherCar(name) {
        this.name = name;
    }
    AnotherCar.prototype.getName = function () {
        return this.name;
    };
    AnotherCar = __decorate([
        logging(false)
    ], AnotherCar);
    return AnotherCar;
}());
var audi = new AnotherCar('Audi');
console.log(audi.getName());
//a more advanced usecase
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
// it is possible to stack decorators
var Giant = /** @class */ (function () {
    function Giant() {
        //some comment
    }
    Giant.prototype.setKind = function (kind) {
        this.kind = kind;
    };
    Giant.prototype.getKind = function () {
        return this.kind;
    };
    Giant = __decorate([
        logging(false),
        printable
    ], Giant);
    return Giant;
}());
var mountainGiant = new Giant();
mountainGiant.setKind('mountain');
//onsole.log(mountainGiant.getKind());
mountainGiant.print(); // to bad, one needs to write this like this with (<any>className.print()) otherwise TSC will fail  //consider it a syntax bug
//  to know what arguments the decorator is expecting look up here
//  https://www.typescriptlang.org/docs/handbook/decorators.html
//  method decorators, class decorators ...
//METHOD decarator
//prevent constructur overwrites
function editable(value) {
    //this is the actual constrcutor
    return function (target, propName, descriptor) {
        descriptor.writable = value;
        // to prevent TS on error, set the tsc to noUnusedParameters: false
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    Project.prototype.getName = function () {
        return this.projectName;
    };
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Wendelstein X-7");
project.calcBudget();
console.log(project.getName());
/* project.calcBudget = function() { //overwrites the function here
  console.log(2000)
} */
project.calcBudget();
//------------------------------
//property decorators
// make property DungeonName uneditable
function overwritable(value) {
    return function (target, propertyName) {
        var newDescriptor = {
            //this prevents every writing access, even the constructor
            writable: value
        };
        return newDescriptor;
    };
}
var Dungeon = /** @class */ (function () {
    function Dungeon(name) {
        this.dungeonName = name;
    }
    Dungeon.prototype.getName = function () {
        return this.dungeonName;
    };
    Dungeon.prototype.makeAdventureresScream = function () {
        console.log('GRRR');
    };
    __decorate([
        overwritable(false)
    ], Dungeon.prototype, "dungeonName", void 0);
    return Dungeon;
}());
//const beginnerDungeon = new Dungeon('LEVEL 1'); // this is now also prevented
/*
console.log(beginnerDungeon.getName());
//beginnerDungeon.dungeonName = 'LEVEL 2'; // hwat is not working now
console.log(beginnerDungeon.getName());
*/
//-------------------------------
//parameter decorators
function printInfo(target, methodName, paramIndex) {
    console.log('Target', target);
    console.log('Method', methodName);
    console.log('index', paramIndex);
    console.log(Date.now());
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    // this is how to apply it to args
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        printAll ? console.log('10000') : console.log('300');
    };
    __decorate([
        __param(0, printInfo), __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var math11B = new Course('MATH11B');
math11B.printStudentNumbers('anything', false);
math11B.printStudentNumbers('anything', true);
