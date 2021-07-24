const removeBtnRef = document.querySelectorAll('.remove-button');
removeBtnRef.forEach(el =>
    el.addEventListener('click', event => {
        event.target.parentNode.remove();
    }),
);
