//это вроде бы работает, но, мне кажется, сделала я неправильно.
// думаю, что тут должен быть все-таки конструктор в классе, типа такого:

// class Calculator {
//     constructor(numberOne, numberTwo) {
//         this.numberOne = numberOne,
//         this.numberTwo = numberTwo
//     }
// }

// и дальше с функциями типа так:

// static calcSum () {
//     return this.numberOne + this.numberTwo
// }

// но так у меня не работало)))

    class Calculator {

        //сложение
    static calcSum() {
    const num1 = Number(document.getElementById('addendOne').value);
    const num2 = Number(document.getElementById('addendTwo').value);
    return num1 + num2
        }

        //вычитание
    static calcSubtraction() {
        const numOne = Number(document.getElementById('numOne').value);
        const numTwo = Number(document.getElementById('numTwo').value);
        return +numOne - +numTwo
    }

        //умножение
    static calcMultiplication() {
        const factorOne = Number(document.getElementById('factorOne').value);
        const factorTwo = Number(document.getElementById('factorTwo').value);
        return +factorOne * +factorTwo
    }

        //деление
    static calcDivision() {
        const dividend = Number(document.getElementById('dividend').value);
        const divider = Number(document.getElementById('divider').value);
        return +dividend / +divider
    }
    }

    const btnSum = document.getElementById('btnSum');
    const btnSubtraction = document.getElementById('calcSubtraction');
    const btnMultiplication = document.getElementById('calcMultiplication');
    const btnDivision = document.getElementById('calcDivision');

    //чекбокс сложение
    function checkboxSum() {
        const checkboxSum = document.getElementById('checkSum');
        if (checkboxSum.checked == true) {
            document.getElementById('resultCheckSum').innerHTML = "Молодец!!!";
        }

        else {
            document.getElementById('resultCheckSum').innerHTML = "Не забудь про галочку";
        }
    }

    //обработчик для вычисления суммы
    btnSum.addEventListener('click', calcSum);

    //обработчки для чекбокса сложения
    btnSum.addEventListener('click', checkboxSum);

    //обработчик для вычисления разности
    btnSubtraction.addEventListener('click', calcSubtraction);

    //обработчки для чекбокса вычитания
    btnSubtraction.addEventListener('click', checkboxSubtraction);

    //обработчик для вычисления умножения
    btnMultiplication.addEventListener('click', calcMultiplication);

    //обработчки для чекбокса умножения
    btnMultiplication.addEventListener('click', checkboxMultiplication);

    //обработчик для вычисления деления
    btnDivision.addEventListener('click', calcDivision);

    //обработчки для чекбокса деления
    btnDivision.addEventListener('click', checkboxDivision);

    //функция для вычисления суммы
    function calcSum() {
    const resultSum = Calculator.calcSum();
    document.getElementById('resultSum').innerHTML = resultSum;
    }

    //чекбокс сложение
    function checkboxSum() {
        const checkboxSum = document.getElementById('checkSum');
        if (checkboxSum.checked == true) {
            document.getElementById('resultCheckSum').innerHTML = "Молодец!!!";
        }

        else {
            document.getElementById('resultCheckSum').innerHTML = "Не забудь про галочку";
        }
    }

    //функция для вычисления разности
    function calcSubtraction () {
        const resultMinus = Calculator.calcSubtraction();
        document.getElementById('resultMinus').innerHTML = resultMinus;
    }

    //чекбокс вычитание
    function checkboxSubtraction() {
        const checkboxSubtraction = document.getElementById('checkMinus');
        if (checkboxSubtraction.checked == true) {
            document.getElementById('resultCheckSubtraction').innerHTML = "Молодец!!!";
        }

        else {
            document.getElementById('resultCheckSubtraction').innerHTML = "Не забудь про галочку";
        }
    }

    //функция для вычисления умножения
    function calcMultiplication() {
        const resultMultiplication = Calculator.calcMultiplication();
        document.getElementById('resultMultiplication').innerHTML = resultMultiplication;
    }

        //чекбокс умножение
        function checkboxMultiplication() {
            const checkboxMultiplication = document.getElementById('checkMiltiplcation');
            if (checkboxMultiplication.checked == true) {
                document.getElementById('resultCheckMiltiplcation').innerHTML = "Молодец!!!";
            }
    
            else {
                document.getElementById('resultCheckMiltiplcation').innerHTML = "Не забудь про галочку";
            }
        }

    //функция для вычисления деления
    function calcDivision() {
        const resultDivision = Calculator.calcDivision();
        document.getElementById('resultDivision').innerHTML = resultDivision;
    }

    //чекбокс деление
    function checkboxDivision() {
        const checkboxDivision = document.getElementById('checkDivision');
        if (checkDivision.checked == true) {
            document.getElementById('resultCheckDivision').innerHTML = "Молодец!!!";
        }

        else {
            document.getElementById('resultCheckDivision').innerHTML = "Не забудь про галочку";
        }
    }
