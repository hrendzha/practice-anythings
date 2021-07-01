// Написати ф-ю яка приймає масив і видаляє звідти всі унікальні елементи

const nonUniqueElements = arr => {
    const occurrences = {};

    for (let i = 0; i < arr.length; i++) {
        occurrences[arr[i]] = (occurrences[arr[i]] || 0) + 1;
    }

    const keys = Object.keys(occurrences);

    for (const key of keys) {
        if (occurrences[key] === 1) {
            const index = arr.indexOf(Number(key));
            arr.splice(index, 1);
        }
    }

    return arr;
};

// console.log(nonUniqueElements([1, 2, 3, 1, 3])); // [1, 3, 1, 3]
// console.log(nonUniqueElements([1, 2, 3, 4, 5])); // []
// console.log(nonUniqueElements([5, 5, 5, 5, 5])); // [5, 5, 5, 5, 5]
// console.log(nonUniqueElements([10, 9, 10, 10, 9, 8])); // [10, 9, 10, 10, 9]
