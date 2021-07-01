// Написати ф-ю isObjectEmpty яка перевіряє чи обєкт пустий чи ні. Якщо обєкт пустий то повернути true інакше false

const isObjectEmpty = obj => Object.keys(obj).length === 0;

console.log(isObjectEmpty({})); // true
console.log(isObjectEmpty({ name: 'user', age: 21 }));
