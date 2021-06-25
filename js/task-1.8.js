//Написати програму яка отримає від користувача число (кількість хвилин) і виведе на екран строку в форматі години і хвилини Приклад 70 покаже 1:10 450 покаже 7:30 1441 покаже 24:1

const convertInHoursAndMinutes = minutes => `${Math.floor(minutes / 60)}:${minutes % 60}`;

console.log(convertInHoursAndMinutes(10));
console.log(Math.floor(10 / 60));
