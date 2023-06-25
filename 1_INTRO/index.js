var numberOne = 1;
var numberTwo = 2;
function greeting(one, two) {
    console.log("Numero ".concat(one, ", ").concat(two));
    var isNumber = typeof one === 'number' ? true : false ? typeof two === 'number' ? true : false : false;
    if (isNumber) {
        console.log(some(one, two));
    }
    else
        console.log('Não são numeros');
}
function some(one, two) {
    return one + two;
}
greeting(numberOne, numberTwo);
