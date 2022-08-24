function aggregateEl(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverse = input.reduce((a, b) => a + 1 / b, 0);
    let concat = input.join("");
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
aggregateEl([1, 2, 3]);
aggregateEl([2, 4, 8, 16]);