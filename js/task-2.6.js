// Написати ф-ю rgbToHex яка приймає колір в форматі rgb і повертає колір в форматі hex

// ! Не вирішив :(

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgb2hex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(rgb2hex(255, 0, 0));
