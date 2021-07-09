// Написати метод every який приймає масив і ф-ю callback (в якій ми будемо робити різні перевірки) Цей метод повертає true якщо кожен елемент масиву пройшов перевірку з callback. Якщо хоча б один елемент не проходить перевірку то повертає false, callback приймає елемент масиву

const obj = {
    every(arr, callback) {
        for (const el of arr) {
            if (!callback(el)) {
                return false;
            }
        }

        return true;
    },
};

console.log(obj.every([1, 2, 3, 4, 5], el => el < 10));
