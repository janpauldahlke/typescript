class Person {
  //public would exppose it ouside of class
  //private only in the object
  //protected are accisble for all inherited classes

  firstName: string;

  // needs to set "strictPropertyInitialization": false,
  // the delicious knowledge comes from https://stackoverflow.com/questions/48815216/angular-property-decorators-throwing-property-x-has-no-initializer-error
  private type: string; // otherwise this error would occur property has no initializer and is definitely not assigned in the constructor
  //setting them default is possible like this
  protected age: number = 42;


  constructor(firstName: string) {
      this.firstName = firstName;
  }


  //methods also follow the 
  /*
    public
    private
    protected pattern
  */
  printType(): string{
    return this.type
  }

  setType(type: string): void {
    this.type = type
  }

  printAge() : void{
    console.log(this.age)
  }

  setAge(age: number) : void {
    this.age = age
  }
}

const paul = new Person('Paul')
console.log(paul, paul.firstName /* because firstName is visible = public, but we cannot access type or age here, because its keywords*/)
// a way to typecheck! sweet!!
if(paul instanceof Person) {
  console.log('Paul is instance of person', paul instanceof Person)
}
paul.setAge(12)
paul.printAge()
paul.setType('superUser')
console.log(paul.printType())
console.log('____', paul)


// inheritance
class Student extends Person {
  //firstName = 'StudentClassName' // this makes student1 console.log = undefined
  constructor(name: string) {
    // needs to be called to call parent class
    super(name)
    //console.log(this.type) because type is private!
  }
}

const student1 = new Student()   // TSC errors here, it wants fresh arguembts
const student2 = new Student('providesAName')
console.log(student1)
console.log(student2) // but this name will be still overwritten from inside the student class!
student1.setAge(122)
student1.setType('FOOTYPE') // this is private and shouldnt work
console.log(student1)

//setters and getters 
// the old way
class Animal {
  private _species : string;

  setSpecies(value: string) : void | never {
    value.length > 4 ? this._species = value : this.SpeciesError()
  }
  getSpecies(): string {
    return this._species
  }

 private SpeciesError = () : never => {
  throw Error('Make sure your species is long enough')
 }

}

try {
  const Ape = new Animal();
Ape.setSpecies('Ape');
} catch(error){
  console.log(error)
}
const Nautilus = new Animal();
Nautilus.setSpecies('Nautilus')
console.log(Nautilus.getSpecies)

class Plant {
  private _species : string;

  get species(): string{
    return this._species
  }
  //nice and handy reminds onto vue setter getter!
  set species(value: string) {
    value.length > 3 ? this._species = value : this._species = 'DEFAULT'
  }
}

const dontTouch = new Plant()
console.log('plant1', dontTouch.species)
dontTouch.species = 'NO'
console.log('plant2', dontTouch.species)
dontTouch.species = 'MIMOSA PUDICA'
console.log(dontTouch.species)