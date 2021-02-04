class Animal {
    constructor(name) {
      this.name = name;
    }
    eat() {
      return "Food";
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
    sound() {
      return "Bark";
    }
  }
  
  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
    sound() {
      return "Meow";
    }
  }
  
  class Home {
    adoptPet(pet) {
      adoptedPets.push(pet);
    }
    makeAllSounds() {
      let adoptedPets = [];
      for (var i = 0; i < adoptedPets.length; i++) {
        adoptedPets[i].sound();
      }
    }
  }
  module.exports = { Dog, Cat };