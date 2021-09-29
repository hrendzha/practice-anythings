import debounce from 'lodash.debounce';

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-msg';

let formData = {};

refs.form.addEventListener('input', debounce(onFormInput, 250));
refs.form.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function onFormSubmit(e) {
    e.preventDefault();

    localStorage.removeItem(STORAGE_KEY);

    formData = {};

    e.currentTarget.reset();
}

function onFormInput({ target: { name, value } }) {
    formData[name] = value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateFeedbackForm() {
    const savedMessages = localStorage.getItem(STORAGE_KEY);

    if (savedMessages) {
        const formDataFromStorage = JSON.parse(savedMessages);

        formData = { ...formDataFromStorage };

        const formInputField = Object.keys(refs.form.elements).filter(el => isNaN(el));

        formInputField.forEach(el => {
            refs.form.elements[el].value = formDataFromStorage[el] ? formDataFromStorage[el] : '';
        });
    }
}
