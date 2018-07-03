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
let myName : string = "chtuhullu"
myName = 42;

//number
let myNumber : number = 42;
myNumber = "chthololol"

//boolean
let myBoolean : boolean = false;
myBoolean = 1;

//beware any
let myRealAge; // is type any now
myRealAge = 42;
myRealAge = '42' // will not trow an error // overwrite is possible

//expilcit typing
let myHiddenWish : string;
myHiddenWish = '42';
//myHiddenWish = 42; // is error in IDE and also in TSC

//arrays
let hobbies = ['Gaming', 'Coding']
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = ['100']
//hobbies = [100] // will not work! because the array is already type inside by passing elements into it
//solution could be
//let hobbies : any[] = [100]
let hobos = [100, "foo", true]
hobos.forEach(elem => {
    console.log(typeof elem)
})

//tuples is available in TS
// tuples will keep the order of elements and also its types
let address : [string, number, string, number] = ["Street", 99, "Hamburg", 20359]

//enums come s with typescripts with its own keyword
enum Colors {
    Gray,
    Green = 100,    // these sets green to 100 and all others to Green + n(order)
    Blue,
    Red
}

let myColor : Colors = Colors.Green
console.log('Enum: myColor', myColor)
