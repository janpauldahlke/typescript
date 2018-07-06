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
    function calcWord(arg) {
        return Math.floor(Math.random() * arg) + 42;
    }
    myMathNamespace.calcWord = calcWord;
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
console.log(myMathNamespace.calcRect(10, 4));
