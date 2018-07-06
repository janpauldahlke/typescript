"use strict";
var myMathNamespace;
(function (myMathNamespace) {
    // here are a lot of functions to calc how to reach global domination
    function calcWorld(arg) {
        return Math.floor(Math.random() * arg) + 42;
    }
    myMathNamespace.calcWorld = calcWorld;
})(myMathNamespace || (myMathNamespace = {}));
