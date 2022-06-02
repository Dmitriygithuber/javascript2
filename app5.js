'use strict'

'Задание 5'

let numbersAddition = (numberOne, numberSecond) => {
    return numberOne + numberSecond;
};


let numbersSubtraction = (numberOne, numberSecond) => {
    return numberOne - numberSecond;
};


let numbersMultiplication = (numberOne, numberSecond) => {
    return numberOne * numberSecond;
};


let numbersDivision = (numberOne, numberSecond) => {
    return numberOne / numberSecond;
};

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return numbersAddition(arg1, arg2);
        case "-":
            return numbersSubtraction(arg1, arg2);
        case "*":
            return numbersMultiplication(arg1, arg2);
        case "/":
            return numbersDivision(arg1, arg2);
        default:
            console.log('Неверное выражение');
    };
};
console.log(mathOperation(3, 3, "*"));
