const { Dog, Cat, Home} = require("../src/animal.js");
var dog = new Dog();
var cat = new Cat();
var ds = dog.sound()
var cs = cat.sound()
var home = new Home();
var adoptDog = home.adoptPet(dog);
var dogSound = home.makeAllSounds();
var adoptCat = home.adoptPet(cat);
var catSound = home.makeAllSounds();

describe("Dog", () => {
  it("should expect Dog to eat Food", () => {
    expect(dog.eat()).toBe("Food");
    expect(dog.eat()).not.toBe("food");
  });
  it("should expect Dog sound to be Bark", () => {
    expect(dog.sound()).toBe("Bark");
  });
});

describe("Cat", () => {
  it("should expect Cat to eat Food", () => {
    expect(cat.eat()).toBe("Food");
    expect(cat.eat()).not.toBe("food");
    expect(cat.eat()).not.toBe("meat");
  });
  it("should expect Cat sound to be Meow", () => {
    expect(cat.sound()).toBe("Meow");
    expect(cat.sound()).not.toBe("Barkark");
  });
})

describe("Home", () => {
  it("should expect pets to be adopted", () => {
    expect(adoptDog).toBe("Dog");
    expect(adoptCat).toBe("Cat");
  })
  it("should expect adopted pet dog sound to be Bark", () => {
    expect(dogSound).toBe("Bark")
  })
  it("should expect adopted pet cat sound to be Meow", () => {
    expect(catSound).toBe("Meow")
  })
  
})
