/*
  to enable then set the tsc option 
   "experimentalDecorators": true, 
*/

//example of this ts feature

//to write a class decorator TS always passes a constructorfunction as agrument
function logged(constructorFn: Function) {
  console.log(constructorFn)
}
//function decorators might need other arguements, lets see

//consume the decorator like this
@logged
class Persona {
  constructor() {
    console.log('hi')
  }
}

//  factory
 // this is a way to wrap the decorator in a functio to show/unshow it
function logging(value: boolean) : any { // any is not good here, but it solves the problem on calling  // https://stackoverflow.com/questions/36446480/typescript-decorator-reports-unable-to-resolve-signature-of-class-decorator-whe
  return value ? logged : null
}

@logging(false)  
class AnotherCar {
  private name: string;

  constructor(name: string) {
    this.name = name
  }

  getName(): string {
    return this.name
  }
}
const audi = new AnotherCar('Audi')
console.log(audi.getName())

//a more advanced usecase
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {//  adds the methods print that adds print to the prototype
      console.log(this)
  }
}

// it is possible to stack decorators
@logging(false)
@printable
class Giant {
  private kind: string;
  constructor() {
    //some comment

  }
  public setKind(kind: string) : void {
    this.kind = kind
  }
  public getKind() : string {
    return this.kind;
  }
}

const mountainGiant = new Giant();
mountainGiant.setKind('mountain');
//onsole.log(mountainGiant.getKind());
(<any>mountainGiant).print();   // to bad, one needs to write this like this with (<any>className.print()) otherwise TSC will fail  //consider it a syntax bug

//  to know what arguments the decorator is expecting look up here
//  https://www.typescriptlang.org/docs/handbook/decorators.html
//  method decorators, class decorators ...



//METHOD decarator

//prevent constructur overwrites
function editable(value: boolean) {
  //this is the actual constrcutor
  return function( target:any, propName: string, descriptor: PropertyDescriptor ) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor && https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
    descriptor.writable = value;
    // to prevent TS on error, set the tsc to noUnusedParameters: false
  }
}

class Project {
  private projectName: string;
  constructor(name: string) {
    this.projectName = name;
  }
  @editable(false)
  calcBudget() {
    console.log(1000)
  }

  getName() : string {
    return this.projectName
  }
}

const project = new Project("Wendelstein X-7");
project.calcBudget();
console.log(project.getName())
/* project.calcBudget = function() { //overwrites the function here
  console.log(2000)
} */
project.calcBudget();

//------------------------------
//property decorators
// make property DungeonName uneditable

function overwritable(value: boolean) {
  return function(target: any, propertyName: string) : any {
    const newDescriptor : PropertyDescriptor = {
      //this prevents every writing access, even the constructor
      writable : value
    }
    return newDescriptor;
  }
}

class Dungeon {

  @overwritable(false)
  dungeonName: string;

  constructor(name: string) {
    this.dungeonName = name
  }

  getName() : string {
    return this.dungeonName
  }

  makeAdventureresScream() : void {
    console.log('GRRR');
  }
}
 //const beginnerDungeon = new Dungeon('LEVEL 1'); // this is now also prevented
 /*
console.log(beginnerDungeon.getName());
//beginnerDungeon.dungeonName = 'LEVEL 2'; // hwat is not working now
console.log(beginnerDungeon.getName());
 */


 //-------------------------------
 //parameter decorators

 function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target', target);
  console.log('Method', methodName);
  console.log('index', paramIndex);
  console.log(Date.now());
 }

 class Course {
   name: string;
   constructor(name: string) {
    this.name = name;
   }
   // this is how to apply it to args
   printStudentNumbers(@printInfo mode: string, @printInfo printAll: boolean) {
      printAll ? console.log('10000') : console.log('300')
   }
}

const math11B = new Course('MATH11B');
math11B.printStudentNumbers('anything', false);
math11B.printStudentNumbers('anything', true);