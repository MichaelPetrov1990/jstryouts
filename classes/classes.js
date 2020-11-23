const h1 = document.querySelector(`h1`);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
}

const c = new Color(0, 255, 0, `something`)
h1.style.color = c.rgba(0.3)

// EXTENDS:

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating.`
  }
}
class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    super(name, age)
    this.livesLeft = livesLeft
  }
  purr() {
    return `Prrrrrrrrr`
  }
}
class Dog extends Pet {
  bark() {
    return `WHOOF`
  }
}

const moo = new Cat(`moo`, 7);