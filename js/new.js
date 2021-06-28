const bookShelf = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
        // Change code below this line
        const indexBook = this.books.indexOf(oldName);
        this.books.splice(indexBook, 0, newName);

        // Change code above this line
    },
};

bookShelf.updateBook('Haze', 'Pasha');
console.log(bookShelf.books);
