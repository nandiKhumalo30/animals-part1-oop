class Animal {
  constructor(name) {
    this.name = name;
  }
  sound(){
    return `${this.name} makes a sound`
  }
  eat() {
    return `${this.name} eats`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Dog barks`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  sound() {
    return `Cat meows`;
  }
}

class Home {
  constructor(){
    this.adoptedPets = []
  }
  adoptPet(pet) {
    return this.adoptedPets.push(pet);
  }
  makeAllSounds() {
    for (let i = 0; i < this.adoptedPets.length; i++) {
      return this.adoptedPets[i].sound();
    }
  }
}

module.exports = { Animal, Dog, Cat, Home };
