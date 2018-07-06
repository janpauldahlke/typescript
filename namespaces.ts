
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
// or run tsc like this
// tsc --outFile namespace.js mathFoo/calcRectMath.ts mathFoo/calcWorldMath.ts namespaces.ts
// and keep in mind, that the order does matter here!!

// a better solution here is to import via TS own import synatx!
// its beatiful isnt it?

/// <reference path="mathFoo/calcRectMath.ts"/>
/// <reference path="mathFoo/calcWorldMath.ts"/>

// but one still needs to specify the outFile here
// but as it turns out this is not working, there must be another way!!
// https://stackoverflow.com/questions/35963346/only-amd-and-system-modules-are-supported-alongside-out

console.log(myMathNamespace.calcRect(10,4))
console.log(myMathNamespace.calcWorld(5))