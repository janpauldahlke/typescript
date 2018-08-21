"use strict";
/*
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
*/
/*
interface Map {
setItem: <T> (key: string, item: T) => void
getItem: (key: string) => void
printMap: () => void
}
*/
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        return this.map[key]; // no error handling here
    };
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var myNewMap = new MyMap();
myNewMap.setItem('Juice', 5);
myNewMap.setItem('Milk', 10);
console.log(myNewMap.getItem('Milk'));
myNewMap.printMap();
myNewMap.clear();
myNewMap.printMap();
// make T into number
var numberMap = new MyMap();
numberMap.setItem("1", 19);
numberMap.setItem("2", 18);
numberMap.printMap();
//ez from here: string
var stringMap = new MyMap();
stringMap.setItem("1", "OnkelOtto");
stringMap.setItem("2", "HansMeiser");
stringMap.setItem("3", 12); // error goes here // althoug it has a TS compile error it will compile and run and show / 3 12, unhappy a out this, but like its said, TSC is a different level then JS
stringMap.printMap();
