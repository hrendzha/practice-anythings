// Написати ф-ю countVowels яка буде приймати строку і буде вертати кількість голосних літер. a e i o u AEIOU - рядок з голосними в англ алфавіті

const countVowels = string => {
    string = string.toLowerCase();
    let vowelsLetters = '';

    for (const letter of string) {
        if (letter === ' ') {
            continue;
        }

        if (
            letter === 'a' ||
            letter === 'e' ||
            letter === 'i' ||
            letter === 'o' ||
            letter === 'u'
        ) {
            vowelsLetters += letter;
        }
    }

    return vowelsLetters.length;
};

console.log(countVowels('the quick brown fox')); // 5
