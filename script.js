"use strict";
exports.__esModule = true;
// from the playgrounf typescriptlang.org
// function Greeter(greeting: string) {
//     this.greeting = greeting;
// }
// Greeter.prototype.greet = function() {
//     return "Hello, " + this.greeting;
// }
// // Oops, we're passing an object when we want a string. This will print 
// // "Hello, [object Object]" instead of "Hello, world" without error.
// let greeter = new Greeter("worldMaze");  
// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// };
// document.body.appendChild(button);
// string
var myName = "chtuhullu";
//myName = 42;
//number
var myNumber = 42;
//myNumber = "chthololol"
//boolean
var myBoolean = false;
//myBoolean = 1;
//beware any
var myRealAge; // is type any now
myRealAge = 42;
myRealAge = '42'; // will not trow an error // overwrite is possible
//expilcit typing
var myHiddenWish;
myHiddenWish = '42';
//myHiddenWish = 42; // is error in IDE and also in TSC
//arrays
var hobbies = ['Gaming', 'Coding'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = ['100'];
//hobbies = [100] // will not work! because the array is already type inside by passing elements into it
//solution could be
//let hobbies : any[] = [100]
var hobos = [100, "foo", true];
hobos.forEach(function (elem) {
    console.log(typeof elem);
});
//tuples is available in TS
// tuples will keep the order of elements and also its types
var address = ["Street", 99, "Hamburg", 20359];
//enums come s with typescripts with its own keyword
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
    Colors[Colors["Red"] = 102] = "Red";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log('Enum: myColor', myColor);
//any
// try to avoid this!!!
var car = 'BMW';
car = { brand: 'BMW', price: 99 };
console.log(car);
//---------
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function showConsoleVoid() {
    console.log('voidnes');
    // return myHiddenWish; // tsc's into error cuz void
}
showConsoleVoid();
//  console.log(showConsoleVoid())
//argument types
function multiply(a, b) {
    return a * b;
}
//  console.log(multiply(2, 'jan')) // fooled
console.log(multiply(2, 4));
// function types
var myMultiply;
myMultiply = returnMyName;
console.log(myMultiply());
// this makes TS strong
var myTypedFunction;
myTypedFunction = multiply;
console.log(myTypedFunction(2, 12));
//objects
var userData = {
    name: 'chtulu',
    age: 21
};
userData = {
    name: 'foo',
    age: 42
}; //TS already infered the object
console.log(userData);
//explicit now
var User = {
    name: 'Chtulu',
    age: 42,
    driversLicense: false
};
console.log(User);
//setting types on variables
var Jan = {
    name: 'Jan',
    age: 42,
    driversLicense: true
};
//consumption
console.log(Jan);
//complex object an example
var complex = {
    data: [100, 200, 300, 400],
    output: function (all) {
        if (all) {
            var reducer = function (accumulator, currentValue) { return accumulator + currentValue; };
            return this.data.reduce(reducer);
        }
        else {
            return 0;
        }
    }
};
console.log(complex.output(false));
//testing imported types. but hacked the browser cuz common.js
var complex2 = {
    data: [1, 2, 3, 4],
    output: function (all) {
        if (all) {
            return this.data.reduce((function (acc, val) { return acc + val; }));
        }
        else {
            return 0;
        }
    }
};
console.log(complex2.output(true));
//union types
// to be able to let myRealAge = 27 || "27" one needs let myRealAge : any but this is silly right?
//a real world type
var myRealAge2 = 27; // || '27'
//myRealAge2 = true // a TSC error
//check types
var finalValue = 42;
if (typeof finalValue !== "string") {
    console.log('finalValue needs to be a string');
}
var simpler = {
    count: 10,
    output: function () {
        console.log(this.count);
    }
};
// this needs more reseach
// a guess. TS wants classes here to be an instanceof
// if(simpler instanceof type.simpleOne){
// }
