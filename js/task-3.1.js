// Написати ф-ю яка приймає в себе 2 параметра (об'єкт замовлення і об'єкт з цінами товару) Ця ф-я має повернути ціну замовлення

const productsPrice = {
    apple: 20,
    orange: 5,
    cheese: 12,
    pork: 45,
    bread: 23,
};
const orderA = { apple: 5, cheese: 1, bread: 3 };
const orderB = { orange: 10, pork: 2, bread: 1 };

const countOrderPrice = (order, productsPrice) => {
    const { apple, orange, cheese, pork, bread } = productsPrice;
    const keysOrder = Object.keys(order);
    const keysProductsPrice = Object.keys(productsPrice);
    let price = 0;

    for (const key of keysOrder) {
        if (keysProductsPrice.includes(key)) {
            price += order[key] * productsPrice[key];
        }
    }

    return `Ціна замовлення: ${price}`;
};

console.log(countOrderPrice(orderB, productsPrice));
