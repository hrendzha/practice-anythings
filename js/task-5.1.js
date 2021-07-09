/* Створити простенький калькулятор за допомогою класу.

Цей клас буде мати такі методи:

* Метод що запитує в користувача 2 числа

* Метод що додає ці числа

* Метод що віднімає ці числа

* Метод що перемножує ці числа

* Метод що ділить ці числа

* Метод що виводить результат арифметичної операції на екран в форматі `Результат операції ${value}` цей метод запускається кінці кожного з методів 2-5

* Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)

* Передати в метод №7 колбек ф-ю що підносить числа в степінь

Написати всі методи і перевірити чи вони працюють
*/

class Calculator {
    static firstNumber;
    static secondNumber;

    // Метод що запитує в користувача 2 числа
    static getNumbers(first, second) {
        this.firstNumber = first;
        this.secondNumber = second;
    }

    // Метод що виводить результат арифметичної операції на екран в форматі `Результат операції ${value}` цей метод запускається кінці кожного з методів 2-5
    static showResult(value) {
        return console.log(`Результат операції ${value}`);
    }

    // Метод що додає ці числа
    static addition() {
        const value = this.firstNumber + this.secondNumber;
        return this.showResult(value);
    }

    // Метод що віднімає ці числа
    static subtraction() {
        const value = this.firstNumber - this.secondNumber;
        return this.showResult(value);
    }

    // Метод що перемножує ці числа
    static multiplication() {
        const value = this.firstNumber * this.secondNumber;
        return this.showResult(value);
    }

    // Метод що ділить ці числа
    static division() {
        const value = this.firstNumber / this.secondNumber;
        return this.showResult(value);
    }

    // Метод що додає в калькулятор новий функціонал (Приймає аргументом колбек в якому описаний новий метод)
    static newFunctionality(fnName, callback) {
        this[fnName] = callback;
    }
}

Calculator.getNumbers(2, 2);
Calculator.multiplication();
Calculator.division();
Calculator.addition();
Calculator.subtraction();

// Передати в метод №7 колбек ф-ю що підносить числа в степінь
Calculator.newFunctionality('mathPow', function () {
    const value = this.firstNumber ** this.secondNumber;
    this.showResult(value);
});

Calculator.mathPow();
