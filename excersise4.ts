/*
Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
*/

/*
interface Map {
setItem: <T> (key: string, item: T) => void
getItem: (key: string) => void
printMap: () => void
}
*/


class MyMap <T> {
  private map: {[key: string ] :T} = {};
  setItem(key: string, item: T) {
    this.map[key] = item;
  }
  getItem(key: string)  {
    return this.map[key]; // no error handling here
  }

  clear() {
    this.map = {};
  }

  printMap(): void {
    for (let key in this.map) {
      console.log(key, this.map[key])
    }
  }
}

const myNewMap = new MyMap();
myNewMap.setItem('Juice', 5)
myNewMap.setItem('Milk', 10)
console.log(myNewMap.getItem('Milk'));
myNewMap.printMap();
myNewMap.clear();
myNewMap.printMap();

// make T into number
const numberMap = new MyMap<number>();
numberMap.setItem("1", 19);
numberMap.setItem("2", 18);
numberMap.printMap()

//ez from here: string
const stringMap = new MyMap<string>();
stringMap.setItem("1", "OnkelOtto")
stringMap.setItem("2", "HansMeiser");
stringMap.setItem("3", 12 as string) // error goes here