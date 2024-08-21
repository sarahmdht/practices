class Animal {
    /* 01- create constructor => initialize the object properties */
    constructor(weight, color) {
        this.weight = weight;
        this.color = color;
    }
    makeSound() {
        console.log("No Sound!");
    }
}

class Rabbit extends Animal {
    constructor(weight, color, hairColor){
        super(weight, color); //call parent constructor
        this.hair = hairColor;
    }
// override the parent
    makeSound() {
        console.log("Rabbit Sound!");
    }
    jump() {
        console.log("Jump!");
    }
}

class Dog extends Animal {
    constructor(weight, color, nails){
        super(weight, color); //call parent constructor
        this.nails = nails;
    }
}
// const Shokry = new Animal(100, "blue", "white");
const Shokry = new Rabbit(100, "blue", "white");
const Roy = new Dog(50, "Brown", 20);

console.log(Shokry);
Shokry.makeSound();

console.log(Roy);
Roy.makeSound();