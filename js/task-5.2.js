/*

TODO: Створити класи Library та Book

1. Клас Library буде описувати нашу бібліотеку книжок. Всі книжки будуть зберігатися в масиві.
Також цей клас буде мати такі методи:

* Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена

* Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки

* Метод addToFavourite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених

* Метод removeFromFavourite - це метод що приймає назву книги і видаляє її з списку улюблених

* Гетер сountFavouriteBooks - це гетер що показує кількість книжок що додані в улюблені

* Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок

* Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці

2. Клас Book буде описувати окрему книгу. Кожна книга це буде обєкт з такими ключами
author
title
price
totalPages
currentPage

Також цей клас буде мати такі методи:

* Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage

* Гетер bookProgres - гетер що переводить кількість прочитаних сторінок в відсотки

* Сетер bookProgres - сетер що переводить відсоток прочитаних сторінок в кількість

 Клас Book приймає один аргумент - обєкт з парметрами книги. В середині класу використовувати деструктуризацію обєкта 
*/

class Library {
    constructor() {}

    static books = [];

    static favoriteBooks = [];

    // Метод buy - це метод що приймає аргументом обєкт книги і додає її в бібліотеку якщо її там ще немає. Якщо книга вже є показує повідомлення що книга вже куплена
    static buy(book = {}) {
        for (const el of this.books) {
            if (el.title === book.title) {
                return console.log(`Книга ${book.title} вже куплена`);
            }
        }

        this.books.push(book);
    }

    // Метод sell - це метод що приймає аргументом назву книги і видаляє її з бібліотеки
    static sell(bookTitle) {
        for (const book of this.books) {
            if (book.title === bookTitle) {
                const bookIndex = this.books.indexOf(book);

                this.books.splice(bookIndex, 1);

                return;
            }
        }

        return console.log(`Книги ${bookTitle} ще немає`);
    }

    // Метод addToFavorite - це метод що приймає аргументом назву книги і додає обєкт книги в список улюблених
    static addToFavorite(bookTitle) {
        for (const book of this.books) {
            if (book.title === bookTitle) {
                this.favoriteBooks.push(book);
                return;
            }
        }

        return console.log(`Потрібно купити книгу "${bookTitle}" щоб додати до улюблених`);
    }

    //  Метод removeFromFavorite - це метод що приймає назву книги і видаляє її з списку улюблених
    static removeFromFavorite(bookTitle) {
        for (const book of this.favoriteBooks) {
            if (book.title === bookTitle) {
                const bookIndex = this.favoriteBooks.indexOf(book);

                this.favoriteBooks.splice(bookIndex, 1);
                return;
            }
        }

        return console.log(`Книги "${bookTitle}" ще немає в улюблених`);
    }

    // Гетер countFavoriteBooks - це гетер що показує кількість книжок що додані в улюблені
    static get countFavoriteBooks() {
        return console.log(`Кількість книг в улюблених: ${this.favoriteBooks.length}`);
    }

    //  Гетер finishedBook - це гетер що містить колекцію всіх прочитаних книжок
    static get finishedBook() {
        const finishedBook = [];

        for (const book of this.books) {
            const percentOfReadPages = (book.currentPage * 100) / book.totalPages;

            if (percentOfReadPages === 100) {
                finishedBook.push(book);
            }
        }

        return console.log(finishedBook);
    }

    // Метод totalCost - це метод що рахує вартість всіх книжок в бібліотеці
    static totalCost() {
        let total = 0;

        for (const { price } of this.books) {
            if (price === undefined) {
                continue;
            }

            total += price;
        }

        return console.log(total);
    }
}

class Book {
    constructor({
        author = 'Noname',
        title = 'title',
        price = 0,
        totalPages = 0,
        currentPage = 0,
    }) {
        this.author = author;
        this.title = title;
        this.price = price;
        this.totalPages = totalPages;
        this.currentPage = currentPage;
    }

    //  Метод read - це метод що приймає кількість сторінок що було прочитано і міняє значення currentPage
    read(countPages) {
        this.currentPage = countPages;
    }

    // Гетер bookProgress - гетер що переводить кількість прочитаних сторінок в відсотки
    get bookProgress() {
        const percentOfReadPages = Number.parseInt((this.currentPage * 100) / this.totalPages);

        return console.log(`Кількість прочитаних сторінок: ${percentOfReadPages}%`);
    }

    // Сетер bookProgress - сетер що переводить відсоток прочитаних сторінок в кількість
    set bookProgress(percent) {
        return console.log(this.currentPage);
    }
}

const book = new Book({
    author: 'Taras Shevchenko',
    title: 'Kobzar',
    price: 700,
    totalPages: 236,
    currentPage: 10,
});

Library.buy(book);

book.bookProgress = book.bookProgress;
