// * спосіб коли ще не знав про делегування
// const removeBtnRef = document.querySelectorAll('.remove-button');
// removeBtnRef.forEach(el =>
//     el.addEventListener('click', event => {
//         event.target.parentNode.remove();
//     }),
// );

// * спосіб коли дізнався про делегуванням
const listRef = document.querySelector('.list');
listRef.addEventListener('click', onCloseBtnClick);

function onCloseBtnClick({ target }) {
    if (target.nodeName !== 'BUTTON') return;

    target.parentNode.remove();
}
