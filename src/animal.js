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
var dog = new Dog('Rax');
var cat = new Cat('Stormy');
var ds = dog.sound()
var cs = cat.sound()
var adoptedPets = []

class Home {
  adoptPet(pet) {
    console.log(adoptedPets.push(pet));
  }
  makeAllSounds() {
    for (let i = 0; i < adoptedPets.length; i++) {
      console.log(adoptedPets[i].sound());
    }
  }
}

var home = new Home();
var adoptDog = home.adoptPet(dog);
var dogSound = home.makeAllSounds();
var adoptCat = home.adoptPet(cat);
var catSound = home.makeAllSounds();
console.log()

module.exports = { Dog, Cat, Home };
