function solve(input) {
    let newArr = [];
    let biggest = input.shift();
    newArr.push(biggest);
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current >= biggest) {
            newArr.push(current);
            biggest = current;
        }
    }
    return newArr;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
console.log("---------");
solve([1, 2, 3, 4]);
console.log("---------");
solve([20, 3, 2, 15, 6, 1]);