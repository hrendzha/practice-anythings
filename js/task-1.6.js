//Написати програму де користувач вводить 3 числа, після вводу всіх трьох чисел йому на екрані показується найбільше з них. Додатково перевіряти чи це взагалі числа

const largestNumber = (...args) => {
    let largestNumber = 0;
    for (const arg of args) {
        if (!Number(arg)) {
            return 'Ведіть число!';
        }

        if (arg > largestNumber) {
            largestNumber = arg;
        }
    }

    return largestNumber;
};

console.log(largestNumber('a', 'd', 'v'));
