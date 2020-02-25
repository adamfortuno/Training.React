class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! My name is ${this.name}.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Traveler extends Person{
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (!!this.home) {
            greeting = `${greeting}. I am visiting from ${this.home}.`;
        }
        
        return greeting;
    }
}

// Header for exercise
const now = new Date();
console.log("Starting exercise at %s", now.toISOString());

const me = new Traveler('Adam Fortuno', 29, "Miami");
const him = new Traveler('Oliver Toms', 46);

console.log(me);
console.log("Description: %s", me.getDescription());
console.log("Greeting: %s", me.getGreeting());


console.log(him);
console.log("Description: %s", him.getDescription());
console.log("Greeting: %s", him.getGreeting());