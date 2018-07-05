console.log('42')

//block scoped variable delaration
//let && const

//var is global scope
var variable = "test"
console.log(variable)
variable = "new Test"
console.log(variable)

const maxLevel = 100
console.log(maxLevel)
//maxLevel = 110 // cannot reassign immutable data structure
let minLevel = 20
minLevel = 10

function reset(){
  let variable = null;
  console.log(variable) // this will not log global but localy declared let
}
reset()

//default arguemnts
// set the default value on type number
const countDown = (start: number = 10) : void => {
  while(start > 0) {
    console.log(start)
    start--;
  }
  console.log('end')
} 
countDown(2)

//rest and spread
const numbers = [1,5,98,-7] // array
console.log(Math.max(1,5,99,-7)) // not an array but a list of numbers
//console.log(Math.max(numbers)) //TS error
console.log(Math.max(...numbers))

//rest operator
function makeArray(/*name : string,*/ ...args: number[]) {
  return args
}
console.log(makeArray(1,2,3,4))

type UserBlog = {
  author: string,
  subheadline: string,
  display: boolean,
}

//destructering
const myHobbies = ['Coding','Gaming', 'Snuggeling'];
const myHobby1 = myHobbies[0]; // the old way
const [hobby1, hobby2] = myHobbies
console.log(hobby1, hobby2)
const UserBlog : UserBlog= {
  author: 'Paul',
  subheadline: 'Lorem',
  display: true,
}

//on destructering the desctructred type has to be of the type of the object
const {author} : UserBlog = UserBlog;
console.log(author)
