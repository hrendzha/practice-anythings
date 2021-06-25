/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';
// let message;

//for
// for (let i = 0; i < logins.length; i += 1) {
//     if (logins[i] === loginToFind) {
//         message = `Пользователь ${loginToFind} НАЙДЕН.`;
//     } else {
//         message = `Пользователь ${loginToFind} НЕ найден.`;
//     }
// }

//for of (break)
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} НАЙДЕН.`;
//         break;
//     }
//     message = `Пользователь ${loginToFind} НЕ найден.`;
// }

// ternary operator
// message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} НАЙДЕН.`
//     : `Пользователь ${loginToFind} НЕ найден.`;

// console.log(message);

//funcrion
// const findLogin = function (logins, loginToFind) {
//     return logins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} НАЙДЕН.`
//         : `Пользователь ${loginToFind} НЕ найден.`;
// };

// console.log(findLogin(logins, 'k1widab3st'));
