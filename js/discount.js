/*
 * Напиши скрит подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время (партнёрская программа).
 *
 * - Общая сумма потраченного хранится в переменной totalSpent
 * - Сумма текущего платежа хранится в переменной payment
 * - Скидка хранится в переменной discount
 *
 * - Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
 * - Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
 * - Если потрачено больше [5000 - золотой партрёр, скидка 10%
 * - Если потрачено меньше 100) - не партнёр, скидка 0%
 *
 * - В результате вывести сообщение
 * «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
 */

let totalSpent = 4500;
const payment = 1234;
const valuta = 'грн.'
let discount;
let userDiscountStatus;

if (totalSpent >= 100 && totalSpent < 1000) {
    discount = 2;
    userDiscountStatus = 'бронзовый';
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    discount = 5;
    userDiscountStatus = 'серебрянный';
} else if (totalSpent >= 5000) {
    discount = 10;
    userDiscountStatus = 'золотой';
} else {
    discount = 0;
}

const findingPercOfNum = (payment / 100) * discount;
const totalPrice = (payment - findingPercOfNum).toFixed(2);

if (discount === 0) {
    console.log(`У вас еще нет партнерской скидки, чтобы получить партнерскую програму общая сума потраченого должна составлять минимально 100${valuta} :(`);
    console.log(`Ваша общая сумма потраченного у нас на даное время: ${totalSpent}${valuta}`);
    console.log(`Оформляем заказ на сумму ${payment}${valuta} БЕЗ скидки`);
    console.log(`Конечная сумма: ${totalPrice}${valuta}`);
} else {
    console.log(`Ура, вы наш ${userDiscountStatus} партнер, у вас действует скидка ${discount}%`);
    console.log(`Оформляем заказ на сумму ${payment}${valuta} со скидкой ${discount}%`);
    console.log(`Конечная сумма со скидкой: ${totalPrice}${valuta}`);
}

totalSpent += payment
console.log(`Если вы совершите покупку ваша общая сума потраченого станет ${totalSpent}${valuta}`);