// from the playgrounf typescriptlang.org
// function Greeter(greeting: string) {
//     this.greeting = greeting;
// }
// Greeter.prototype.greet = function() {
//     return "Hello, " + this.greeting;
// }
// // Oops, we're passing an object when we want a string. This will print 
// // "Hello, [object Object]" instead of "Hello, world" without error.
// let greeter = new Greeter("worldMaze");  
// let button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function() {
//     alert(greeter.greet());
// };
// document.body.appendChild(button);
// string
var myName = "chtuhullu";
myName = 42;
//number
var myNumber = 42;
myNumber = "chthololol";
//boolean
var myBoolean = false;
myBoolean = 1;
//beware any
var myRealAge; // is type any now
myRealAge = 42;
myRealAge = '42'; // will not trow an error // overwrite is possible
//expilcit typing
var myHiddenWish;
myHiddenWish = '42';
//myHiddenWish = 42; // is error in IDE and also in TSC
//arrays
var hobbies = ['Gaming', 'Coding'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = ['100'];
//hobbies = [100] // will not work! because the array is already type inside by passing elements into it
//solution could be
//let hobbies : any[] = [100]
var hobos = [100, "foo", true];
hobos.forEach(function (elem) {
    console.log(typeof elem);
});
//tuples is available in TS
// tuples will keep the order of elements and also its types
var address = ["Street", 99, "Hamburg", 20359];
//enums come s with typescripts with its own keyword
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
    Colors[Colors["Red"] = 102] = "Red";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log('Enum: myColor', myColor);
