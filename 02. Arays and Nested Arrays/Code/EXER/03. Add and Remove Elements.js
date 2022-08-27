function solve(input) {
    let myArr = [];
    let sum = 0;
    for (let element of input) {
        if (element === 'add') {
            sum++;
            myArr.push(sum);
        } else if (element === 'remove') {
            sum++;
            myArr.pop()
        }
    }
    if (myArr.length < 1) {
        console.log('Empty');
    } else {
        console.log(myArr.join('\n'));
    }
}
solve(["add", "add", "add", "add"]);
console.log('--------------');
solve(["add", "add", "remove", "add", "add"]);
console.log('--------------');
solve(["remove", "remove", "remove"]);