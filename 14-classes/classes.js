class Animal {
    /* 01- create constructor => initialize the object properties */
    constructor(w, c, h) {
        this.weight = w;
        this.color = c;
        this.hairColor = h;
    }
    // it is a good practice to name getters and setters with "_"
    get _Weight() {
        return "weight= " + this.weight;
    }
    set _Weight(w) {
        this.weight = w;
    }
    get _color(){
        return this.color;
    }
    set _color(color){
        this.color = color;
    }

    get _hairColor(){
        return this.hairColor;
    }
    set _hairColor(hairColor){
        this.hairColor = hairColor;
    }

    sound() {
        console.log("beeb beeb")
    }
}

const Shokry = new Animal(100, "blue", "white");
const Roy = new Animal(50, "Brown", "black");

// console.log(Shokry);
Shokry._Weight = 500;
Shokry.sound();