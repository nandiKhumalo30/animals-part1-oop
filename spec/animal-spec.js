const { Animal, Dog, Cat, Home} = require("../src/animal.js");

describe("Animal", () => {
  let animal
  beforeEach(() => {
    animal = new Animal("Bruno")
  })
  it("should expect animal to have a sound", () => {
    expect(animal.sound()).toBe("Bruno makes a sound");
  });
  it("should expect animal to eat", () => {
    expect(animal.eat()).toBe("Food");
  });
});

describe("Dog", () => {
  let dog
  beforeEach(() => {
    dog = new Dog("Rax")
  })
  it("should expect Dog to eat Food", () => {
    expect(dog.eat()).toBe("Food");
  });
  it("should expect Dog sound to be Bark", () => {
    expect(dog.sound()).toBe("Dog barks");
  });
});

describe("Cat", () => {
  let cat
  beforeEach(() => {
    cat = new Cat("Stormy")
  })
  it("should expect cat to eat Food", () => {
    expect(cat.eat()).toBe("Food");
  });
  it("should expect Cat sound to be meows", () => {
    expect(cat.sound()).toBe("Cat meows");
  });
})

describe("Home", () => {
  let home
  beforeEach(() => {
      home = new Home()
  })
  it("should be able to adopt a dog and dog must make sound", () => {
      let dog = new Dog("Rax");
      home.adoptPet(dog);
      expect(home.makeAllSounds()).toBe("Dog barks")
  })
  it("should be able to adopt a cat and cat must make sound", () => {
      let cat = new Cat("Stormy");
      home.adoptPet(cat);
      expect(home.makeAllSounds()).toBe("Cat meows")
  })
})
