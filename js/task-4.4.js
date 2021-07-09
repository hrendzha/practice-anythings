/* Написати ф-ю showDeliveryStatus яка приймає масив і виводить на екран інформацію про доставку товара всіх типів.

* Якщо прогрес доставки 100 показувати строку "Done"

* Якщо прогрес доставки < 100 показувати строку "In progress"

* Якщо прогрес доставки null показувати строку "Ready for delivery"

*/

const ordersA = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

const ordersB = [
    { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },
    { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
];

const showDeliveryStatus = arr => {
    for (const { deliveryProgress } of arr) {
        switch (deliveryProgress) {
            case 100:
                console.log('Done');
                break;

            case null:
                console.log('Ready for delivery');
                break;

            default:
                console.log('In progress');
        }
    }
};

showDeliveryStatus(ordersA); // "In Progress", "Done", "Ready for delivery"

showDeliveryStatus(ordersB);
