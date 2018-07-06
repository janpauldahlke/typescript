//BE AS TYPESCRIPTY AS YOU CAN

// // Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }
// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {chrom
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Car{
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name
  }
  
  honk() : void {
    console.log('TUUUUUUUUT')
  }
  accelerate(value: number) : void {
    this.acceleration += value
  }

}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
class baseObject {

  protected _width : number;
  protected _length : number;

  constructor(w: number = 0, l: number = 0) {
    this._width = w;
    this._length = l
  }

  set width(value: number) {
    this._width = value
  }
  set length(value: number) {
    this._length = value
  }

};

class Rectangle extends baseObject {
  constructor() {
    super()
  }

  calcSize() : number {
    return this._length * this._width
  }
}
 const obj = new Rectangle();
 obj.width = 20;
 obj.length = 30;
 console.log(obj.calcSize())


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)

class persona {
  private _firstName : string;

  constructor(/*n: string*/) {
    //this._firstName = n || 'DEFAULTNAME'
  }

  set firstName(n: string) {
    n.length > 3 ? this._firstName = n : this._firstName = 'SHoRTNAME'
  }
  get firstName() : string {
    return this._firstName
  }

}

const pawl = new persona() // constructor wants one argument here // look for a way to pass OPTIONAL ARGUMENTS IN TS !! a nice tasky task
pawl.firstName = 'pl'
console.log(pawl.firstName)
pawl.firstName = 'pawl'
console.log(pawl.firstName)
