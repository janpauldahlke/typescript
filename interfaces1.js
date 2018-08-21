"use strict";
/*
  interface will not be compiled down to ES5. they are just there in
  the TSC context to give you compiler Errors
  Javascript itself does not know about explicit types and so it doesnt
  know interfaces
*/
//by using this one only need one place to define his objects
var sayhello = function (person) {
    console.log('Hello ' + person.firstName); //  Hello undefined
};
var changenamen = function (person) {
    person.firstName = 'Jan';
};
var person = {
    firstName: 'Paul',
    age: 27,
    hobbies: ['Gaming', 'Coding'],
    greet: function (lastName) {
        console.log('Guten Tag. Ich bin ' + this.firstName + ' ' + lastName);
    }
};
//sayhello({firstName: 'Max', age: 30, radomFoo: 'bar' /*a demo of a unnamed property like in line 5 */});
sayhello(person);
changenamen(person);
sayhello(person);
person.greet('NoBody');
//  it is also possible to provide an interface to a class
//  by this the objects need to be in the class
//  therefore use implements keyword
var newPerson = /** @class */ (function () {
    function newPerson() {
    }
    newPerson.prototype.greet = function (lastName) {
        console.log('Guten Tag. Ich bin ' + this.firstName + ' ' + lastName);
    };
    ;
    return newPerson;
}());
var Hans = new newPerson();
Hans.firstName = 'Janno';
Hans.lastName = 'FooBar';
sayhello(Hans);
Hans.greet('Dahl');
Hans.greet(Hans.lastName);
var myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 72,
    firstName: 'alterJan',
    greet: function (lastName) {
        console.log('Hello from oldperson ' + lastName);
    }
};
console.log(oldPerson);
//-------------------------------
// how to handle complex interfaces
