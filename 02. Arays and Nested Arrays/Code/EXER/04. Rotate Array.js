function solve(array, rotateN) {
    for (let i = 0; i < rotateN; i++) {
        let r = array.pop();
        array.unshift(r);
    }
    console.log(array.join(" "));
}
solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);