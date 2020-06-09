
// module wrapper function which the calss is wrapped in

// (function(exports, require, module, __filename, __dirname){

// })

class Person {

  constructor( name , age ){
    this.name = name;
    this.age = age;
  }
  greeting(){
    console.log(`my name is ${this.name} and i am ${this.age} old`);
  
  }
}

const pep = new Person('imane', 45);
console.log(pep)
pep.greeting();

module.exports = Person;