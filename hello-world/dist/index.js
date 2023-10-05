"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Customer extends Person {
}
function echo(value) {
    return value;
}
echo(new Customer("A"));
//# sourceMappingURL=index.js.map