/*Завдання: Написати програму яка буде перевіряти чи рік народження користувача був високосним

Наприклад: 2000, 2004, 2016 - високосні 1998, 2002, 1900 2100 - не високосні */

const checkYearAreLeapYear = yearOfBirth => {
    const leapYears = [2000, 2004, 2016];
    return leapYears.includes(yearOfBirth);
};

console.log(checkYearAreLeapYear(2000));
