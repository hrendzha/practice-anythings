/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],

    getItems() {
        return this.items;
    },

    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quantity += 1;
                return;
            }
        }

        product.quantity = 1;
        this.items.push(product);
    },

    remove(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].name === productName) {
                this.items.splice(i, 1);
                return;
            }
        }
    },

    clear() {
        this.items.length = 0;
    },

    countTotalPrice() {
        let totalPrice = 0;

        for (const item of this.items) {
            totalPrice += item.price * item.quantity;
        }

        return totalPrice;
    },

    increaseQuantity(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].name === productName) {
                this.items[i].quantity += 1;
                return;
            }
        }
    },

    decreaseQuantity(productName) {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].name === productName && this.items[i].quantity > 1) {
                this.items[i].quantity -= 1;
                return;
            }
        }
    },
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'pear', price: 60 });
cart.add({ name: 'pineapple', price: 60 });

cart.add({ name: 'strawberry', price: 110 });
cart.add({ name: 'strawberry', price: 110 });

cart.increaseQuantity('apple');
cart.increaseQuantity('strawberry');

cart.decreaseQuantity('apple');

cart.add({ name: 'pineapple', price: 60 });

console.table(cart.getItems());

console.log(cart.countTotalPrice());
