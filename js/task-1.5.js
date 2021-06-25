//Написати програму яка перевіряє чи введене число потрапляє в діапазон від 55 до 99 включно

const checkNumberInRange = (from, to, num) => {
    for (let i = from; i <= to; i += 1) {
        if (i === num) {
            return true;
        }
    }

    return false;
};

console.log(checkNumberInRange(55, 99, 75));
