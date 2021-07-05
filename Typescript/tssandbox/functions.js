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
console.log(getSum(1, 4));
