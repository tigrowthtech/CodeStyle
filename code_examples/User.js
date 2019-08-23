/* eslint-disable no-console */
export default class User {
  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  sayMyName() {
    console.log(`My name is: ${this.name}`);
  }

  canDrink() {
    return this.age >= 18;
  }
}
