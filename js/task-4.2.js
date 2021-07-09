// Написати метод some який приймає масив і ф-ю callback. Цей метод поверне true якщо хоча б один елемент масиву пройде перевірку з callback callback приймає елемент масиву

const obj = {
    some(arr, callback) {
        for (const el of arr) {
            if (callback(el)) {
                return true;
            }
        }

        return false;
    },
};

console.log(obj.some([1, 2, 3, 22, 5], el => el > 10)); // true (перевіряємо чи елементи > 10)

console.log(obj.some([12, 54, 67, 34], el => el < 10));
// false (перевіряємо чи елементи < 10)
