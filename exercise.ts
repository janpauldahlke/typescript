//be as explicit as possbile

type bankAccount = {
  money : NonNullable<number>,
  deposit : (value : NonNullable<number>) => void,
  withdraw: (value : NonNullable<number>) => void,
}
type person = {
  name: string,
  bankAccount: bankAccount,
  hobbies : string[]
}

let bankAccount : bankAccount = {
  money: 2000,
  deposit(value: bankAccount["money"]) {
    this.money += value
  },
  withdraw(value: bankAccount["money"]) 
  {
    this.money -= value
  }
}

let mySelf : person = {
  name: 'Pau.l',
  bankAccount: bankAccount,
  hobbies: ['Coding', 'Gaming']
}

mySelf.bankAccount.deposit(3000)
console.log(mySelf.bankAccount.money)
mySelf.bankAccount.withdraw(100)
console.log(mySelf.bankAccount.money)