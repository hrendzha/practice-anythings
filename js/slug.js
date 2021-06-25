/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// варіант 1
// const normalizeTitle = title.toLowerCase();
// const splitToArray = normalizeTitle.split(' ');
// const titleSlug = splitToArray.join('-');

// варіант 2
// const titleSlug = title.toLowerCase().split(' ').join('-');

// console.log(titleSlug);

// function
// const slugify = function (string) {
//     return string.toLowerCase().split(' ').join('-');
// };

// console.log(slugify(title));
