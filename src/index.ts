interface Human {
  name: string;
  age: number;
  gender?: 'male' | 'female' | 'unknown gender';
}

class Person {
  public gender: string = '';
  constructor(public name: string, public age: number,  gender?: string) {
    if(gender) {
      this.gender = gender;
    }
  }
  // getter & setter
  get whoami () {
    return this.name;
  }
  set whoami (name: string) {
    this.name = name;
  }
  getName() {
    return this.name ?? 'unknown name';
  }
}

const person = new Person('xgqfrms', 23);

console.log(`whoami =`, person.whoami, person.getName());
