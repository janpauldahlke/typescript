//modules instead of namespaces

import { calculateCircumcumference } from './MathModule/circle';
import { calcRect } from './MathModule/rectangle';

console.log(calcRect(5, 5));
console.log(calculateCircumcumference(5));

/*
 * this will not work, because x is set to
 * {
  "compilerOptions": {
  "module": "commonjs",                      Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'.
*/

// the 'fix' will be to use systemjs as module loader
// npm install --save systemjs // is need due production

