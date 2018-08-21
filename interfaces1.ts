/*
  interface will not be compiled down to ES5. they are just there in
  the TSC context to give you compiler Errors
  Javascript itself does not know about explicit types and so it doesnt
  know interfaces
*/


//create them as explicit as possible!
interface NamedPerson {
  firstName: string;
  age?: number // optional argument
  [propName: string] : any // this could come handy, if one doesnt know all props yet. this type is more generic
  // it says be a property of <anyName>: so you are a key be of type string and this props as any because we dont know the type yet
  // might come very handy if you create an interdface, but y dont now all props names then

  greet(lastName: string): void
}
//by using this one only need one place to define his objects

const sayhello = (person: NamedPerson) => {
  console.log('Hello ' + person.firstName) //  Hello undefined
}

const changenamen = (person : NamedPerson) => {
  person.firstName = 'Jan'
}

const person : NamedPerson = {
  firstName: 'Paul',
  age: 27,
  hobbies: ['Gaming', 'Coding'], // this will also fit to the unknow property in line 5
  greet(lastName: string) { 
    console.log('Guten Tag. Ich bin ' + this.firstName + ' ' + lastName)
  }
}

//sayhello({firstName: 'Max', age: 30, radomFoo: 'bar' /*a demo of a unnamed property like in line 5 */});
sayhello(person)
changenamen(person);
sayhello(person);
person.greet('NoBody')

//  it is also possible to provide an interface to a class
//  by this the objects need to be in the class
//  therefore use implements keyword
class newPerson implements NamedPerson {
  firstName: string;
  greet(lastName: string) : void {
    console.log('Guten Tag. Ich bin ' + this.firstName + ' ' + lastName)
  };

  //try to add an attribute to the class that does not exist on the interface
  lastName: string;
  //this is working, so we can add new properties to a class
}

const Hans = new newPerson();
Hans.firstName = 'Janno';
Hans.lastName = 'FooBar'
sayhello(Hans)
Hans.greet('Dahl')
Hans.greet(Hans.lastName);

//-----------------------------------------------
// interfaces for functiontypes

interface DoubleValueFunc {
  (number1: number, number2: number): number
}

const myDoubleFunction: DoubleValueFunc = (value1: /*string*/ number, value2: number) =>{ // string will throw TS compiler error here
  return (value1 + value2) * 2
}

console.log(myDoubleFunction(10,20))

//-----------------------------------------------
// interface Inheritance

interface agedPerson extends NamedPerson {
  age: number //not optional anymore
}

const oldPerson: agedPerson = {
  age: 72,
  firstName: 'alterJan',
  greet(lastName: string) {
    console.log('Hello from oldperson ' + lastName);
  }
}
console.log(oldPerson)

//-------------------------------
// how to handle complex interfaces