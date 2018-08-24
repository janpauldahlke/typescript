"use strict";
//console.log(42)
//combine thrid party like jQuery with TS
Object.defineProperty(exports, "__esModule", { value: true });
require("jQuery"); // too be able to do this enhance the systemJS config object by map key is import name and value is path
$('#app').css({ "background-color": "green" }); // consume the $ selector we need a type defintion file as bridge // or even better just visit https://github.com/DefinitelyTyped/DefinitelyTyped/tree/efa449afccaf85ef2099425cee41d349b48ea0a1/types
// download stuff with npm install --save-dev @types/jquery -> win
// it also enables IDE support on the types
$('#app').mouseenter(function () { $('#app').css({ "background-color": "yellow" }); });
