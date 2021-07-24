const backwardBtnRef = document.querySelector('.arrow.backward');
const forwardBtnRef = document.querySelector('.arrow.forward');
const stickerListRef = document.querySelector('.sticker-list');

backwardBtnRef.addEventListener('click', onBackwardBtnClick);
forwardBtnRef.addEventListener('click', onForwardBtnClick);

function onBackwardBtnClick() {
    console.log('tes');
}

function onForwardBtnClick() {
    if (!stickerListRef.style.transform) {
        stickerListRef.style.transform = 'translateX(0px)';
    }

    stickerListRef.style.transform = 'translateX(-390px)';
    console.log(stickerListRef.style.transform);
}
