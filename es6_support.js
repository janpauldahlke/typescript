"use strict";
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
