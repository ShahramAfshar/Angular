// function sum(a:number,b:number):number {
//     return a+b;
// }
var sum = function (a, b) { return a + b; };
console.log(sum(10, 20));
var fullName = function (fistName, lastName) {
    return fistName + "-" + lastName;
};
console.log(fullName("shahram", "afshar"));
function sum2(a, b) {
    return a + b;
}
console.log(sum2(10, 20));
console.log(sum2("10", "20"));
function rest(name) {
    var param = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        param[_i - 1] = arguments[_i];
    }
    return name + "----" + param.join("-");
}
console.log(rest("shahram", "sady", "sakineh", "farzaneh"));
