// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

// * через обєкт
// const deleteUniqueElements = arr => {
//     const repeatingNumbers = {};

//     for (let i = 0; i < arr.length; i += 1) {
//         repeatingNumbers[arr[i]] = (repeatingNumbers[arr[i]] || 0) + 1;
//     }

//     const keys = Object.keys(repeatingNumbers);

//     for (const key of keys) {
//         if (repeatingNumbers[key] === 1) {
//             const index = arr.indexOf(Number(key));
//             arr.splice(index, 1);
//         }
//     }

//     return arr;
// };

// * через масив
// const deleteUniqueElements = arr => {
//     const repeatingNumbers = [];

//     for (let i = 0; i < arr.length; i += 1) {
//         repeatingNumbers[arr[i]] = (repeatingNumbers[arr[i]] || 0) + 1;
//     }

//     return arr.filter(item => repeatingNumbers[item] > 1);
// };

// * за допомогою метода  lastIndexOf
const deleteUniqueElements = arr =>
    arr.filter((item, index, array) => array.indexOf(item) !== array.lastIndexOf(item));

console.log(deleteUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
console.log(deleteUniqueElements([1, 2, 3, 4, 5])); // []
console.log(deleteUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
console.log(deleteUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10, 9]
