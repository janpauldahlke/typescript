"use strict";
//be as explicit as possbile
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
    withdraw: function (value) {
        this.money -= value;
    }
};
var mySelf = {
    name: 'Pau.l',
    bankAccount: bankAccount,
    hobbies: ['Coding', 'Gaming']
};
mySelf.bankAccount.deposit(3000);
console.log(mySelf.bankAccount.money);
mySelf.bankAccount.withdraw(100);
console.log(mySelf.bankAccount.money);
//# sourceMappingURL=exercise.js.map