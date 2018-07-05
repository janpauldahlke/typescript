"use strict";
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
//# sourceMappingURL=classes.js.map