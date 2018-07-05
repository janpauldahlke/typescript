"use strict";
//having a look at compiled TS
var myName = 'Paul';
//myName = 27 // it is compiled to working JS BUT the TSC errors
console.log(typeof myName);
//noImplicitAny: false
var beAnything;
beAnything = 24;
//noImplicitAny: ture
//TS 2.0
// no unUsedParameter = true
// strictNullCheck, else on result would be implicit null because no assign
function controlMe(isTrue /*, somethingElse: boolean */) {
    var result;
    return isTrue ? result = 12 : result = 11; // result only is not workking on TSC 2.0
}
//# sourceMappingURL=compilercheck.js.map