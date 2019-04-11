function Mouse (name, weight, speed, isAlive) {
    this.name = name; // string
    this.weight = weight // int
    this.speed = speed // float
    this.isAlive = isAlive // boolean
    this.say = function () {
        console.log ("Chit...chit...");
    }
}