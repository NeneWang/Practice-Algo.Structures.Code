var myString;
var myNum;
var myBool;
var strArr;
var numArr;
var boolArr;
var strNumTuple;
myString = "Hello " + " " + "World".slice(0, 3);
myNum = 2.2;
myBool = false;
strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, true];
strNumTuple = ['hello', 4,];
console.log(myString);
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 == "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 == "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
console.log();
console.log(getSum(1, 5));
//# sourceMappingURL=tsc.js.map