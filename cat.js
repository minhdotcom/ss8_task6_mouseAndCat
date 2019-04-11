function Cat (name, weight, speed) {
    this.name = name; // string
    this.weight = weight; // int
    this.speed = speed; // float
    this.say = function () {
        console.log("Meow...meow...");
    }
    this.stomach = [];
    this.catchMouse = function (mouse) {
        if (this.speed < mouse.speed) {
            console.log(this.name + " cat is slower than " + mouse.name + " mouse. He missed it.");
            return false;
        } else {
            console.log(this.name + " catched the mouse " + mouse.name + " successfully.");
            return true;
        }
    }
    this.eatMouse = function (mouse) {
        if ( ! mouse.isAlive) {
            console.log("The " + mouse.name + "mouse is dead. Cat only eats alive mouses.");
        } else if ( ! this.catchMouse(mouse)) {
            console.log("He hasn't catched the " + mouse.name + " mouse yet. Catch him first.");
        } else {
            mouse.isAlive = false;
            this.weight += mouse.weight;
            this.stomach.push(mouse.name);
            console.log(this.name + " ate the mouse " + mouse.name);
        }
    }
}