//this is about generics

//a simple example
function echo(data: any) {  //the any makes it generic, one could consider it a pro, because we can pass anyhting to the data
  return data;
}
console.log(echo('Jan').length) // this works, because jan is string, but the IDE does not know it is
console.log(echo(27).length) // and this returns undefined because length is not callable on number
console.log(echo({name: 'Jan', age: 27}))
// it would be nice to have a compile error for this


//--------------------------------------------
//a better generic
function betterEcho<T>(data : T) : T { // with <T> we can use T as type on data and because data is now T we also could return T from function expression
  return data; // so data here in the return is of type T
}

console.log(betterEcho('Jan').length) // length will be suggested by the IDE
console.log(betterEcho(27)/*.length*/) //while this will be an error and legnth is forbidden TSCompiler -> generics.ts:18:28 - error TS2339: Property 'length' does not exist on type '27'.
console.log(betterEcho<number>(42)); // this is another way to be explicit
console.log(betterEcho({name: 'paul', age: 36}))

//--------------------------------------------
//built-in generics
const testResult: Array<number> = [1.24, 3.78] // with this explicity its the following line is not correct
testResult.push(6.34)
//testResult.push('string') // the incorrect line
console.log(testResult);

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((elem) => console.log(elem))
}
printAll(["Apples", "Banana", "Foo"])
printAll<string>(["Apples", "Banana", "Foo"]);
printAll([1.23, false, "Bananae"]) // a cool feature?

//--------------------------------------------
//  Generic Type
// whhat i understood that this created a generic const
//creates a const, taht has assigned generic type that returns T
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("foobar"));


//--------------------------------
//often used, learn this!
//Generic classes

class SimpleMath {
  baseValue: any; //to lazy to reconfigure the TSC atm Member 'baseValue' implicitly has an 'any' type.
  multiplyValue: any;
  calculate() {
    return this.baseValue * this.multiplyValue
  }
}
const simpleMathConst = new SimpleMath();
simpleMathConst.baseValue = "some"; // dangerous! but stopopid to do irt as any // will return NaN cuz String + number = Na
simpleMathConst.multiplyValue = 5;
console.log(simpleMathConst.calculate())

// improve this but not the ultra good way
class betterSimpleMath <T>{
  baseValue: T;
  multiplyValue: T;
  calculate(): number {
    return +this.baseValue * +this.multiplyValue // lol typecasting is possible with + before expression LOLOL
  }
}
const myBetterSimpleMath = new betterSimpleMath();
myBetterSimpleMath.baseValue = 10;
myBetterSimpleMath.multiplyValue = 50;
console.log(myBetterSimpleMath.calculate())

class evenBetterSimpleMath<T extends number | string> { //constrain the generic
  baseValue: T;
  multiplyValue: T;
  calc() : number {
    return +this.baseValue * +this.multiplyValue; // is this equivalent to parseInt()?
  }
}
const myEvenBetterMath = new evenBetterSimpleMath</*number | */string>(); // consume the generic here and be constrain the distinct type of the class this way one could have eiter string or number based classes
myEvenBetterMath.baseValue = "100";
myEvenBetterMath.multiplyValue = "50";
console.log(myEvenBetterMath.calc())