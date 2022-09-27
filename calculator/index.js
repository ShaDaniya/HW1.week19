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
        const dividend = document.getElementById('dividend').value;
        const divider = document.getElementById('divider').value;
        return +dividend / +divider
    }
    }

    const btnSum = document.getElementById('btnSum')

    //обработчик для вычисления суммы
    btnSum.addEventListener('click', calcSum);
    //btnSum.addEventListener('click', checkboxRequired);

    //функиця для вычисления суммы
    function calcSum() {
    const resultSum = Calculator.calcSum();
    document.getElementById('resultSum').innerHTML = resultSum;
    }

    //функция для чекбокс required
    // function checkboxRequired() {
    //     const checkbox = document.getElementById('checkSum').required;
    //     document.getElementById('resultCheck').innerHTML = checkbox;
    // }

    //тут пыталась сделать валидацю для отмеченного чекбокса, доделать не успела
    const checkbox = document.getElementById('checkSum')

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
})

    function calcSubtraction () {
        const resultMinus = Calculator.calcSubtraction();
        document.getElementById('resultMinus').innerHTML = resultMinus;
    }

    function calcMultiplication() {
        const resultMultiplication = Calculator.calcMultiplication();
        document.getElementById('resultMultiplication').innerHTML = resultMultiplication;
    }

    function calcDivision() {
        const resultDivision = Calculator.calcSubtraction();
        document.getElementById('resultDivision').innerHTML = resultDivision;
    }




