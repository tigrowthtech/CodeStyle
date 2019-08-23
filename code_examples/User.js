/* eslint-disable no-console */
export default class User {
  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;

    const arr = [1, 2, 3];
    const obj = {
      a: 'a',
      b: 'b',
    };

    this.arr = arr;
    this.obj = obj;
  }

  sayMyName() {
    console.log(`My name is: ${this.name}`);
  }

  canDrink() {
    return this.age >= 18;
  }
}
