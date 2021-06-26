// Написати ф-ю capitalize яка буде приймати строку і буде вертати нову строку де кожне слово буде починатися з великої літери.

// проба
// const capitalize = string => {
//     const stringSplitInArray = string.split(' ');
//     let newString = '';

//     for (const word of stringSplitInArray) {
//         let splitedWord = word.split('');
//         splitedWord[0] = splitedWord[0].toUpperCase();
//         splitedWord = splitedWord.join('');
//         newString += splitedWord + ' ';
//     }

//     return newString;
// };

// console.log(capitalize('the quick brown fox')); // 'The Quick Brown Fox '

// проба 2
const capitalize = string => {
    string = string.split(' ');
    let changeString = [];

    for (const word of string) {
        let changeLetter = word.split('');
        changeLetter[0] = changeLetter[0].toUpperCase();
        changeLetter = changeLetter.join('');
        changeString.push(changeLetter);
    }

    return changeString.join(' ');
};

console.log(capitalize('the quick brown fox')); // 'The Quick Brown Fox
