// Написати гру камінь ножиці папір. Де компютер загадує своє значення потім користувач вводить свій варіант і далі ми бачимо результат на екпані хто виграв

const gameRockScissorsPaper = userChoice => {
    const array = ['Камінь', 'Ножиці', 'Папір'];
    const computerChoice = array[Math.floor(Math.random() * array.length)];

    if (
        (userChoice === 'Камінь' && computerChoice === 'Камінь') ||
        (userChoice === 'Ножиці' && computerChoice === 'Ножиці') ||
        (userChoice === 'Папір' && computerChoice === 'Папір')
    ) {
        return `Нічия, ви загадали ${userChoice}, компютер теж загадав ${computerChoice}`;
    }

    if (userChoice === 'Камінь' && computerChoice === 'Ножиці') {
        return `Ви виграли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${userChoice} ламає ${computerChoice})`;
    } else if (userChoice === 'Камінь' && computerChoice === 'Папір') {
        return `Ви програли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${computerChoice} накриває ${userChoice})`;
    }

    if (userChoice === 'Ножиці' && computerChoice === 'Камінь') {
        return `Ви програли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${userChoice} не ріжуть ${computerChoice})`;
    } else if (userChoice === 'Ножиці' && computerChoice === 'Папір') {
        return `Ви виграли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${userChoice} ріжуть ${computerChoice})`;
    }

    if (userChoice === 'Папір' && computerChoice === 'Камінь') {
        return `Ви виграли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${userChoice} накриває ${computerChoice})`;
    } else if (userChoice === 'Папір' && computerChoice === 'Ножиці') {
        return `Ви програли, ви загадали ${userChoice}, компютер загадав ${computerChoice} (${computerChoice} ріжуть ${userChoice})`;
    }
};

console.log(gameRockScissorsPaper('Папір'));
