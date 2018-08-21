"use strict";
//this is about generics
//a simple example
function echo(data) {
    return data;
}
console.log(echo('Jan').length); // this works, because jan is string, but the IDE does not know it is
console.log(echo(27).length); // and this returns undefined because length is not callable on number
console.log(echo({ name: 'Jan', age: 27 }));
// it would be nice to have a compile error for this
//--------------------------------------------
//a better generic
function betterEcho(data) {
    return data; // so data here in the return is of type T
}
console.log(betterEcho('Jan').length); // length will be suggested by the IDE
console.log(betterEcho(27) /*.length*/); //while this will be an error and legnth is forbidden TSCompiler -> generics.ts:18:28 - error TS2339: Property 'length' does not exist on type '27'.
console.log(betterEcho(42)); // this is another way to be explicit
console.log(betterEcho({ name: 'paul', age: 36 }));
//--------------------------------------------
//built-in generics
var testResult = [1.24, 3.78]; // with this explicity its the following line is not correct
testResult.push(6.34);
//testResult.push('string') // the incorrect line
console.log(testResult);
// Arrays
function printAll(args) {
    args.forEach(function (elem) { return console.log(elem); });
}
printAll(["Apples", "Banana", "Foo"]);
printAll(["Apples", "Banana", "Foo"]);
printAll([1.23, false, "Bananae"]); // a cool feature?
//--------------------------------------------
//  Generic Type
// whhat i understood that this created a generic const
//creates a const, taht has assigned generic type that returns T
var echo2 = betterEcho;
console.log(echo2("foobar"));
//--------------------------------
//often used, learn this!
//Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMathConst = new SimpleMath();
simpleMathConst.baseValue = "some"; // dangerous! but stopopid to do irt as any // will return NaN cuz String + number = Na
simpleMathConst.multiplyValue = 5;
console.log(simpleMathConst.calculate());
// improve this but not the ultra good way
var betterSimpleMath = /** @class */ (function () {
    function betterSimpleMath() {
    }
    betterSimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; // lol typecasting is possible with + before expression LOLOL
    };
    return betterSimpleMath;
}());
var myBetterSimpleMath = new betterSimpleMath();
myBetterSimpleMath.baseValue = 10;
myBetterSimpleMath.multiplyValue = 50;
console.log(myBetterSimpleMath.calculate());
var evenBetterSimpleMath = /** @class */ (function () {
    function evenBetterSimpleMath() {
    }
    evenBetterSimpleMath.prototype.calc = function () {
        return +this.baseValue * +this.multiplyValue; // is this equivalent to parseInt()?
    };
    return evenBetterSimpleMath;
}());
var myEvenBetterMath = new evenBetterSimpleMath(); // consume the generic here and be constrain the distinct type of the class this way one could have eiter string or number based classes
myEvenBetterMath.baseValue = 100;
myEvenBetterMath.multiplyValue = "50";
console.log(myEvenBetterMath.calc());
