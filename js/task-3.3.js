/* Створити обєкт піци з полями і методами

В обєкті має бути такі поля і методи:

* поле для збереження розміру піци

* поле для збереження списку добавок

* поле для збереження списку соусів

* метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)

* метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)

* метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)

* метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)

* метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)

* метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)

* метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)

* метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)

* метод що показує час приготуванни в хвилинах в залежності від складності піци

* Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this) */

const sizes = {
    big: { price: 25, cal: 100, time: 15 },
    small: { price: 15, cal: 50, time: 7 },
    medium: { price: 15, cal: 50, time: 7 },
};

const stuffing = {
    cheese: { price: 6.5, cal: 45, time: 2 },
    beacon: { price: 10, cal: 70, time: 6 },
    tomato: { price: 12.1, cal: 4, time: 5 },
    chicken: { price: 9.3, cal: 30, time: 5.1 },
};

const sauces = {
    mustard: { price: 3, cal: 5, time: 1 },
    ketchup: { price: 4.2, cal: 20, time: 1.5 },
    bolognese: { price: 7.5, cal: 50, time: 3 },
};

const pizza = {
    size: '',
    toppings: [],
    gravies: [],

    // метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
    addStuffing(stuff) {
        const stuffingKeys = Object.keys(stuffing);

        if (stuffingKeys.includes(stuff)) {
            this.toppings.push(stuff);
            return `Додано добавку ${stuff} :)`;
        }

        return `Добавки ${stuff} в нас немає :(`;
    },

    // метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку
    removeStuffing(stuff) {
        if (this.toppings.includes(stuff)) {
            this.toppings.splice(this.toppings.indexOf(stuff), 1);
            return `${stuff} видалено з піци :)`;
        }

        return `${stuff} ще немає в піці :(`;
    },

    // метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати помилку
    addSauces(sauce) {
        const saucesKeys = Object.keys(sauces);

        if (saucesKeys.includes(sauce)) {
            this.gravies.push(sauce);
            return `Додано соус ${sauce} :)`;
        }

        return `Соусу ${sauce} в нас немає :(`;
    },

    // метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
    removeSauces(sauce) {
        if (this.gravies.includes(sauce)) {
            this.gravies.splice(this.gravies.indexOf(sauce), 1);
            return `${sauce} видалено з набору :)`;
        }

        return `${sauce} ще немає в наборі :(`;
    },

    // метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
    calculatePrice(obj) {
        const { size, toppings, gravies } = obj;
        let totalPrice = 0;
        const sizesKeys = Object.keys(sizes);
        const stuffingKeys = Object.keys(stuffing);
        const saucesKeys = Object.keys(sauces);

        if (sizesKeys.includes(size)) {
            totalPrice += sizes[size].price;
        }

        for (const key of stuffingKeys) {
            for (const topping of toppings) {
                if (key === topping) {
                    totalPrice += stuffing[key].price;
                }
            }
        }

        for (const key of saucesKeys) {
            for (const gravy of gravies) {
                if (key === gravy) {
                    totalPrice += sauces[key].price;
                }
            }
        }

        return totalPrice.toFixed(2);
    },

    // метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
    calculateCalories(obj) {
        const { size, toppings, gravies } = obj;
        let totalCalories = 0;
        const sizesKeys = Object.keys(sizes);
        const stuffingKeys = Object.keys(stuffing);
        const saucesKeys = Object.keys(sauces);

        if (sizesKeys.includes(size)) {
            totalCalories += sizes[size].cal;
        }

        for (const key of stuffingKeys) {
            for (const topping of toppings) {
                if (key === topping) {
                    totalCalories += stuffing[key].cal;
                }
            }
        }

        for (const key of saucesKeys) {
            for (const gravy of gravies) {
                if (key === gravy) {
                    totalCalories += sauces[key].cal;
                }
            }
        }

        return totalCalories;
    },

    //  метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
    showOrderInf(obj) {
        const { size, toppings, gravies } = obj;

        const sizesKeys = Object.keys(sizes);
        const stuffingKeys = Object.keys(stuffing);
        const saucesKeys = Object.keys(sauces);

        if (!sizesKeys.includes(size)) {
            return `Розміру піци '${size}' в нас немає :(`;
        }

        //  Нижче валідація на провірку начинок
        // noToppingsFound - зробив копію toppings щоб можна деструктивно працювати з масивом і не боятися що оригінальний масив постраждає
        const noToppingsFound = [...toppings];

        for (const key of stuffingKeys) {
            for (const topping of toppings) {
                // якщо начинка є в доступі то видаляємо її з noToppingsFound в підсумку після закінчення всього циклу в noToppingsFound залишаться лише начинки яких немає в доступі або пустий масив що означатиме що все гуд
                if (key === topping) {
                    noToppingsFound.splice(noToppingsFound.indexOf(topping), 1);
                }
            }
        }
        if (noToppingsFound.length > 0) {
            return `Начинки '${noToppingsFound}' в нас немає :(`;
        }

        // аналогічна валідація соусів
        const noGraviesFound = [...gravies];

        for (const key of saucesKeys) {
            for (const gravy of gravies) {
                if (key === gravy) {
                    noGraviesFound.splice(noGraviesFound.indexOf(gravy), 1);
                }
            }
        }
        if (noGraviesFound.length > 0) {
            return `Соуса(-ів) '${noGraviesFound}' в нас немає :(`;
        }

        const price = this.calculatePrice(obj);
        const cal = this.calculateCalories(obj);

        return `Ціна: ${price}; калорії: ${cal}; список добавок: ${toppings.join(
            ', ',
        )}; список соусів: ${gravies.join(', ')};`;
    },

    // метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
    chooseSize(size) {
        const sizesKeys = Object.keys(sizes);

        if (!sizesKeys.includes(size)) {
            return `Розміру піци ${size} в нас немає :(`;
        }

        this.size = size;
        return `Розмір піци ${size} додано`;
    },

    // метод що показує час приготуванни в хвилинах в залежності від складності піци
    showCookingTime(obj) {
        const { size, toppings, gravies } = obj;
        let totalTime = 0;
        const sizesKeys = Object.keys(sizes);
        const stuffingKeys = Object.keys(stuffing);
        const saucesKeys = Object.keys(sauces);

        if (sizesKeys.includes(size)) {
            totalTime += sizes[size].time;
        }

        for (const key of stuffingKeys) {
            for (const topping of toppings) {
                if (key === topping) {
                    totalTime += stuffing[key].time;
                }
            }
        }

        for (const key of saucesKeys) {
            for (const gravy of gravies) {
                if (key === gravy) {
                    totalTime += sauces[key].time;
                }
            }
        }

        return totalTime + 'хв.';
    },

    // Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
    verifyPizza(obj) {
        const { size, toppings, gravies } = obj;
        const sizesKeys = Object.keys(sizes);
        const stuffingKeys = Object.keys(stuffing);
        const saucesKeys = Object.keys(sauces);
        let message = '';

        if (size.length === 0) {
            message += 'Виберіть розмір піци ';
        }

        if (this.toppings.length < 1) {
            message += 'Виберіть хоча б одну начинку ';
        }

        if (this.gravies.length < 1) {
            message += 'Виберіть хоча б один соус ';
        }

        if (message.length > 0) {
            return message;
        }

        return true;
    },
};

// console.log(pizza.addStuffing('pork'));
// console.log(pizza.addStuffing('tomato'));
// console.log(pizza.toppings);

// console.log(pizza.removeStuffing('pork'));
// console.log(pizza.removeStuffing('tomato'));
// console.log(pizza.toppings);

// console.log(pizza.addSauces('tartar'));
// console.log(pizza.addSauces('bolognese'));
// console.log(pizza.gravies);

// console.log(pizza.removeSauces('tartar'));
// console.log(pizza.removeSauces('bolognese'));
// console.log(pizza.gravies);

// console.log(pizza.calculatePrice(pizza));

// console.log(pizza.calculateCalories(pizza));

// console.log(pizza.showOrderInf(pizza));

// console.log(pizza.chooseSize('big'));
// console.log(pizza.size);

// console.log(pizza.showCookingTime(pizza));

// console.log(pizza.verifyPizza(pizza));
