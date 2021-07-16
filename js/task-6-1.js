/* Данно масив з обєктами. Виконати всі поставлені задачі використовуючи функціональні методи масивів

* отримати масив вчених що народилися в 19 ст

* знайти суму років скільки прожили всі вченні

* Відсортувати вчених по алфавіту

* Відсортувати вчених по кількості прожитих років

* Видалити з масива вчених що народилися в 15 або 16 або 17 столітті

* Знайти вченого який народився найпізніше.

* Знайти рік народження Albert Einstein

* знайти вчених прізвище яких починається на літеру С

* Видалити з масива всіх вчених імя яких починається на A

* Знайти вченого який прожив найбільше і вченого який прожив найменьше

* Знайти вчених в яких співпадають перші літери імені і прізвища

* Дізнатися чи всі вченні працювали в 19 столітті 

*/

const arr = [
    { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
    { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
    { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
    { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
    { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
    { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
    { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
    { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
    { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
    { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
    { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
    { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
];

console.table(arr);

// отримати масив вчених що народилися в 19 ст
const scientistsForCenturies = arr.filter(scientist => scientist.born >= 1860);
// console.log('scientistsForCenturies', scientistsForCenturies);

// знайти суму років скільки прожили всі вченні
const sumLivedYearsScientists = arr.reduce(
    (acc, scientist) => acc + (scientist.dead - scientist.born),
    0,
);
// console.log('sumLivedYearsScientists', sumLivedYearsScientists);

// Відсортувати вчених по алфавіту
const sortAlphabeticallyByScientists = [...arr].sort((a, b) => a.surname.localeCompare(b.surname));
// console.table(sortAlphabeticallyByScientists);

// Відсортувати вчених по кількості прожитих років
const sortLivedYearsScientists = [...arr].sort((a, b) => a.dead - a.born - (b.dead - b.born));
// console.table(sortLivedYearsScientists);

// Видалити з масива вчених що народилися в 15 або 16 або 17 столітті
const scientistsWithEighteenthCentury = [...arr].filter(scientist => scientist.born >= 1860);
// console.table(scientistsWithEighteenthCentury);

// Знайти вченого який народився найпізніше.
const oldestScientist = [...arr].sort((a, b) => a.born - b.born)[0];
// console.log('oldestScientist', oldestScientist);

//  Знайти рік народження Albert Einstein
const findTheYearOfBirthByName = arr.find(
    scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein',
);
// console.log('findTheYearOfBirthByName', findTheYearOfBirthByName);

// знайти вчених прізвище яких починається на літеру С
const findScientistsByFirstLetter = arr.filter(scientist => scientist.surname[0] === 'C');
// console.table(findScientistsByFirstLetter);

// Видалити з масива всіх вчених імя яких починається на A
const filteredScientistByFirstLetterName = arr.filter(scientist => scientist.name[0] !== 'A');
// console.table(filteredScientistByFirstLetterName);

// Знайти вченого який прожив найбільше і вченого який прожив найменьше
const scientistWhoLivedTheLongest = [...arr].sort((a, b) => a.dead - a.born - (b.dead - b.born));
// console.log('scientistWhoLivedTheLongest', scientistWhoLivedTheLongest[0]);
// console.log(
//     'scientistWhoLivedTheLongest',
//     scientistWhoLivedTheLongest[scientistWhoLivedTheLongest.length - 1],
// );

//  Знайти вчених в яких співпадають перші літери імені і прізвища
const scientistsWithTheSameFirstLetterName = arr.filter(
    scientist => scientist.name[0] === scientist.surname[0],
);
// console.table(scientistsWithTheSameFirstLetterName);

// Дізнатися чи всі вченні працювали в 19 столітті
const didAllScientistsWorkInTheNineteenthCentury = arr.every(scientist => scientist.born >= 1860);
// console.log(
//     'didAllScientistsWorkInTheNineteenthCentury',
//     didAllScientistsWorkInTheNineteenthCentury,
// );
