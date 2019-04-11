var Tom = new Cat ("Tom", 8, 20);
var Mikey = new Mouse ("Mikey", 6, 12, true);
var Mike = new Mouse ("Mike", 3, 25, true);
var Tim = new Mouse ("Tim", 8, 10, false);

Mikey.say();
Mike.say();
Tom.say();
console.log (Tom);

Tom.catchMouse(Tim);
Tom.eatMouse(Tim);
console.log (Tom);

Tom.catchMouse(Mikey);
Tom.eatMouse(Mikey);
console.log (Tom);

Tom.catchMouse(Mike);
Tom.eatMouse(Mike);
console.log (Tom);