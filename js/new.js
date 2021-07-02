/*
 * Типов транзакции всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

let counter = 0;

const account = {
    // Текущий баланс счета
    balance: 0,
    // История транзакций
    transactions: [],
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const id = (counter += 1);

        return {
            id,
            amount,
            type,
        };
    },
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.balance += amount;

        const newTrans = this.createTransaction(amount, Transaction.DEPOSIT);

        this.transactions.push(newTrans);
    },
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {},
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {},
    /*
     * Метод ищет и возвращает объект транзакции по id
     */
    getTransactionDetails(id) {
        for (const ele of this.transactions) {
            if (id === ele.id) {
                return ele;
            }
        }

        return 'Не знайдено';
    },
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {},
};

account.deposit(150);
account.deposit(200);

console.table(account.transactions);
// console.table(account.balance);

console.log(account.getTransactionDetails(3));
