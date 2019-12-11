var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
        this.family = "";
    }
    Person.prototype.FullName = function () {
        return this.name + " " + this.family;
    };
    return Person;
}());
var shahrm = new Person();
console.log(shahrm.FullName());
