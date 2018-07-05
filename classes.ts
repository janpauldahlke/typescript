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