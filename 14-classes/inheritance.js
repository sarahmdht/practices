class Animal {
    /* 01- create constructor => initialize the object properties */
    constructor(weight, color) {
        this.weight = weight;
        this.color = color;
    }


    makeSound() {
        console.log("beeb beeb")
    }
}

class Rabbit extends Animal {
    constructor(weight, color, hairColor){
        super(weight, color); //call parent constructor
        this.hair = hairColor;
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
console.log(Roy);

// Shokry.makeSound();
// Roy.makeSound();
