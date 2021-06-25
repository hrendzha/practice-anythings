/* Написати програму яка буде знаходити суму, різницю, добуток, частрку двох чисел Користувач вводить 2 числа потім вводить знак операції і отримує результат в форматі "Сума чисел a i b = результат" (такий шаблон для кожної відповіді) */

const calculateNumbers = (num1, num2, mathOperator) => {
    switch (mathOperator) {
        case '-':
            return `Різниця чисел ${num1} i ${num2} = ${num1 - num2}`;

        case '+':
            return `Сума чисел ${num1} i ${num2} = ${num1 + num2}`;

        case '*':
            return `Множення чисел ${num1} i ${num2} = ${num1 * num2}`;

        case '/':
            return `Ділення чисел ${num1} i ${num2} = ${(num1 / num2).toFixed(2)}`;
        default:
            return 'Я не вмію таке робити';
    }
};

console.log(calculateNumbers(2, 3, '/'));
