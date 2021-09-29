const backwardBtnRef = document.querySelector('.arrow.backward');
const forwardBtnRef = document.querySelector('.arrow.forward');
const stickerListRef = document.querySelector('.sticker-list');
const carouselListRef = document.querySelector('.carousel');

backwardBtnRef.addEventListener('click', onBackwardBtnClick);
forwardBtnRef.addEventListener('click', onForwardBtnClick);

function onBackwardBtnClick() {
    if (!stickerListRef.style.transform) {
        stickerListRef.style.transform = 'translateX(0px)';
    }

    const translateVal = stickerListRef.style.transform
        .split('')
        .filter(el => !isNaN(Number(el)))
        .join('');

    stickerListRef.style.transform = `translateX(-${Number(translateVal) - 390}px)`;
}

function onForwardBtnClick() {
    if (!stickerListRef.style.transform) {
        stickerListRef.style.transform = 'translateX(0px)';
    }

    const translateVal = stickerListRef.style.transform
        .split('')
        .filter(el => !isNaN(Number(el)))
        .join('');

    stickerListRef.style.transform = `translateX(-${Number(translateVal) + 390}px)`;
}
