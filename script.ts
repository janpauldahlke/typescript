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
//myName = 42;

//number
let myNumber : number = 42;
//myNumber = "chthololol"

//boolean
let myBoolean : boolean = false;
//myBoolean = 1;

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
    Green = 100,    // these sets green to 100 and all others to the last = number //  + n(order)
    Blue,
    Red
}

let myColor : Colors = Colors.Green
console.log('Enum: myColor', myColor)

//any
// try to avoid this!!!
let car : any = 'BMW'
car = { brand : 'BMW', price : 99}
console.log(car)



//---------
// functions
function returnMyName(): string {
    return myName
}
console.log(returnMyName())

//void
function showConsoleVoid() : void {
    console.log('voidnes')
    // return myHiddenWish; // tsc's into error cuz void
}
showConsoleVoid();
//  console.log(showConsoleVoid())

//argument types
function multiply(a: number, b: number): number {
    return a*b
}
//  console.log(multiply(2, 'jan')) // fooled
console.log(multiply(2,4))

// function types
let myMultiply : () => void;
myMultiply = returnMyName
console.log(myMultiply())
// this makes TS strong
let myTypedFunction : (value1: number, value2:  number) => number 
myTypedFunction = multiply
console.log(myTypedFunction(2,12))