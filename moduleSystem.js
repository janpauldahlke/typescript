"use strict";
//modules instead of namespaces
Object.defineProperty(exports, "__esModule", { value: true });
var circle_1 = require("./MathModule/circle");
var rectangle_1 = require("./MathModule/rectangle");
console.log(rectangle_1.calcRect(5, 5));
console.log(circle_1.calculateCircumcumference(5));
/*
 * this will not work, because x is set to
 * {
  "compilerOptions": {
  "module": "commonjs",                      Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
*/
// the 'fix' will be to use systemjs as module loader
// npm install --save systemjs // is need due production
