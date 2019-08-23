export default class User {
  constructor(name, age, cpf) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
  }

  canDrink() {
    return this.age >= 18;
  }
}
