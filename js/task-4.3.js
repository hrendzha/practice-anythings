// Створити метод compact який приймає масив і вертає новий де відсутні будь-які значення що при переведені в bool дають false

const obj = {
    compact(arr) {
        const filteredArr = [];

        for (const el of arr) {
            if (Boolean(el)) {
                filteredArr.push(el);
            }
        }

        return filteredArr;
    },
};

console.log(obj.compact([1, 0, '', null, 'Hello'])); // [1,'Hello']
