/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// variant 1
// const filterNumbers = function (arrayNumbers, ...args) {
//     const array = [];

//     for (const number of arrayNumbers) {
//         for (const arg of args) {
//             if (arg === number) {
//                 array.push(arg);
//             }
//         }
//     }

//     return array;
// };

// variant 2
const filterNumbers = function (arrayNumbers, ...args) {
    const array = [];

    for (const arg of args) {
        if (arrayNumbers.includes(arg) && !array.includes(arg)) {
            array.push(arg);
        }
    }

    return array;
};

// console.log(filterNumbers([1, 2, 3, 4, 5], 3, 6, 1, 5, 1, 3));

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
    const allArray = firstArray.concat(secondArray);
    if (allArray.length > maxLength) {
        return allArray.slice(0, maxLength);
    }

    return allArray;
    // Change code above this line
}

// console.log(makeArray([1, 2, 3], [1, 2, 3], 8));
