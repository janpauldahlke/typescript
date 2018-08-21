//having a look at compiled TS
let myName : string = 'Paul';
//myName = 27 // it is compiled to working JS BUT the TSC errors
console.log(typeof myName)

//noImplicitAny: false
let beAnything;
beAnything = 24;
//noImplicitAny: ture


//TS 2.0
// no unUsedParameter = true
// strictNullCheck, else on result would be implicit null because no assign
function controlMe(isTrue: boolean /*, somethingElse: boolean */) {
  let result : number;
  return isTrue ? result = 12 : result = 11 // result only is not workking on TSC 2.0
}