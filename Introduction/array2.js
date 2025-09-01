let num = [1, 2, 3, 4, 5, 6, 4, 7, 8, 6, 9, 0];

// Find
console.log(num.find((curValue) => {
    return curValue > 5;
}))

console.log(num.findIndex((curValue) => {
    return curValue > 5;
}))

// Filter
console.log(num.filter((curValue) => {
    return curValue > 5;
}))

// Sort
console.log(num.sort());
