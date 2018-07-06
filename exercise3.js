"use strict";
//BE AS TYPESCRIPTY AS YOU CAN
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
