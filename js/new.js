// Создадим еще один li и вставим его в конец списка
const item = document.createElement('a');
item.href = '#';
item.classList.add('btn');
item.textContent = 'item 4';

const nav = document.querySelector('.nav');
nav.appendChild(item);

// Создадим заголовок и вставим его в container перед списком
const heading = document.createElement('h1');
heading.textContent = 'Nav heading';

const container = document.querySelector('.container');
container.insertBefore(heading, nav);
nav.appendChild(heading);
