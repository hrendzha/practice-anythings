// // Написати програму яка переведе введену оцінку студента до болонського формату
// '89 - 100 це A'
// '75 - 88 це В'
// '60 - 74 це С'
// '45 - 59 це D'
// '20 - 44 це Е'
// до 20 це F

const convertAssessment = assessment => {
    if (assessment > 0 && assessment < 20) {
        return 'Оцінка за болонською системою: F';
    } else if (assessment >= 20 && assessment < 45) {
        return 'Оцінка за болонською системою: E';
    } else if (assessment >= 45 && assessment < 60) {
        return 'Оцінка за болонською системою: D';
    } else if (assessment >= 60 && assessment < 75) {
        return 'Оцінка за болонською системою: C';
    } else if (assessment >= 75 && assessment < 89) {
        return 'Оцінка за болонською системою: B';
    } else if (assessment >= 89 && assessment <= 100) {
        return 'Оцінка за болонською системою: A';
    } else {
        return 'Такої оцінки не існує';
    }
};

console.log(convertAssessment(101));
