/*
 * Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
 */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn = array => {
    console.log(array[0]);
    array.splice(0, 1);

    if (array.length > 0) {
        fn(array);
    }

    console.log('aas');

    return array;
};

console.log(fn(array));
