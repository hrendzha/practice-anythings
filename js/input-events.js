const input = document.querySelector('.js-input');
const nameLabel = document.querySelector('.js-button > span');
const license = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');

input.addEventListener('input', event => (nameLabel.textContent = event.currentTarget.value));

license.addEventListener('change', event => (btn.disabled = !event.currentTarget.checked));
