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
    function Student() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.firstName = 'StudentClassName';
        return _this;
    }
    return Student;
}(Person));
var student1 = new Student(); // TSC errors here, it wants fresh arguembts
var student2 = new Student('providesAName');
console.log(student1);
console.log(student2); // but this name will be still overwritten from inside the student class!
//# sourceMappingURL=classes.js.map