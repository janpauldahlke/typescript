"use strict";
var myMathNamespace;
(function (myMathNamespace) {
    function calcRect(w, l) {
        return w * l;
    }
    myMathNamespace.calcRect = calcRect;
})(myMathNamespace || (myMathNamespace = {}));
