const { Dog, Cat, Home } = require("../src/animal.js");
var dog = new Dog();
var cat = new Cat();

describe("Dog", function () {
  it("should expect Dog to eat Food", function () {
    expect(dog.eat()).toBe("Food");
    expect(dog.eat()).not.toBe("food");
  });
  it("should expect Dog sound to be Bark", function () {
    expect(dog.sound()).toBe("Bark");
  });
});

describe("Cat", function () {
  it("should expect Cat to eat Food", function () {
    expect(cat.eat()).toBe("Food");
    expect(cat.eat()).not.toBe("food");
    expect(cat.eat()).not.toBe("meat");
  });
  it("should expect Cat sound to be Meow", function () {
    expect(cat.sound()).toBe("Meow");
    expect(cat.sound()).not.toBe("Barkark");
  });
})
