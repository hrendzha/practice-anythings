/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// let changedString = '';

// варіант 1
// for (let i = 0; i < string.length; i += 1) {
//     changedString =
//         string[i] === string[i].toLowerCase()
//             ? changedString + string[i].toUpperCase()
//             : changedString + string[i].toLowerCase();
// }

// console.log(changedString);

// варіант 2
// for (const letter of string) {
//     changedString =
//         letter === letter.toLowerCase()
//             ? changedString + letter.toUpperCase()
//             : changedString + letter.toLowerCase();
// }

// console.log(changedString);

// варіант 3
// let arrayLetters = string.split('');

// for (const letter of arrayLetters) {
//     changedString =
//         letter === letter.toLowerCase()
//             ? changedString + letter.toUpperCase()
//             : changedString + letter.toLowerCase();
// }

// console.log(changedString);

// function
// const invertedString = function (string) {
//     string = string.split('');
//     let changedString = '';
//     for (const letter of string) {
//         changedString +=
//             letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return changedString;
// };

// console.log(invertedString('JavaScript'));

//function 2
// const invertedString = function (string) {
//     let changedString = '';
//     for (const letter of string) {
//         changedString +=
//             letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return changedString;
// };

// console.log(invertedString('JavaScript'));
