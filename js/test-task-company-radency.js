const chooseDistance = (t, k, ls) => {
    const combinations = getCombinations(ls, k);
    if (!combinations) return null;

    const sumCombinations = getSumCombinations(combinations);
    const isMaxSumDistanceGreaterSumCombination = sumCombinations.some(sum => t >= sum);

    if (!isMaxSumDistanceGreaterSumCombination) return null;

    return getClosestNumber(sumCombinations, t);
};

function getCombinations(list, k) {
    const combs = [];

    if (k > list.length || k <= 0) return null;

    if (k === list.length) return [list];

    if (k === 1) return list.map(num => [num]);

    for (let i = 0; i < list.length - k + 1; i++) {
        const head = list.slice(i, i + 1);
        const tailcombs = getCombinations(list.slice(i + 1), k - 1);

        for (let j = 0; j < tailcombs.length; j += 1) {
            combs.push(head.concat(tailcombs[j]));
        }
    }

    return combs;
}

function getSumCombinations(combinations) {
    return combinations.map(comb => comb.reduce((acc, distance) => (acc += distance)));
}

function getClosestNumber(arr, goal) {
    return arr.reduce((acc, curr) => (Math.abs(curr - goal) < Math.abs(acc - goal) ? curr : acc));
}

console.log(chooseDistance(174, 3, [51, 56, 58, 59, 61])); //173
console.log(chooseDistance(163, 3, [50])); // null
