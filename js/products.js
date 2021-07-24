import products from './data/products.js';

/* markup 
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__desc">Описание</p>
  <p product__price>Цена: 1111 кредитов</p>
</article>
*/

// * створю розмітку методом creatElement і всяке барахло
const createProductMarkup = products => {
    const arrayProductsEl = products.map(
        ({ name, description, price, available = false, onSale = false }) => {
            const productEl = document.createElement('article');
            productEl.classList.add('product');
            if (!available) {
                productEl.classList.add('product--not-available');
            }
            if (onSale) {
                productEl.classList.add('product--on-sale');
            }

            const productNameEl = document.createElement('h2');
            productNameEl.classList.add('product__name');
            productNameEl.textContent = name;

            const productDescEl = document.createElement('p');
            productDescEl.classList.add('product__desc');
            productDescEl.textContent = description;

            const productPriceEl = document.createElement('p');
            productPriceEl.classList.add('product__price');
            productPriceEl.textContent = `Цена: ${price} кредитов`;

            productEl.append(productNameEl, productDescEl, productPriceEl);

            return productEl;
        },
    );

    document.body.prepend(...arrayProductsEl);
};

createProductMarkup(products);

// * створюю  розмітку за допомогою свойста innerHTML
// const createProductMarkup = products => {
//     const arrayProductsEl = products.map(
//         ({ name, description, price, available = false, onSale = false }) => {
//             const productEl = document.createElement('article');
//             productEl.classList.add('product');
//             if (!available) {
//                 productEl.classList.add('product--not-available');
//             }
//             if (onSale) {
//                 productEl.classList.add('product--on-sale');
//             }

//             productEl.innerHTML = `
//                 <h2 class="product__name">${name}</h2>
//                 <p class="product__desc">${description}</p>
//                 <p product__price>Цена: ${price} кредитов</p>
//             `;

//             return productEl;
//         },
//     );

//     document.body.prepend(...arrayProductsEl);
// };

// createProductMarkup(products);

// * створюю  розмітку за допомогою метода insertAdjacentHTML
// const createProductMarkup = products => {
//     const arrayProductsEl = products.map(
//         ({ name, description, price, available = false, onSale = false }) => {
//             const productEl = document.createElement('article');
//             productEl.classList.add('product');

//             if (!available) {
//                 productEl.classList.add('product--not-available');
//             }
//             if (onSale) {
//                 productEl.classList.add('product--on-sale');
//             }

//             productEl.insertAdjacentHTML(
//                 'beforeend',
//                 `
//                 <h2 class="product__name">${name}</h2>
//                 <p class="product__desc">${description}</p>
//                 <p product__price>Цена: ${price} кредитов</p>
//             `,
//             );

//             return productEl;
//         },
//     );

//     document.body.prepend(...arrayProductsEl);
// };

// createProductMarkup(products);
