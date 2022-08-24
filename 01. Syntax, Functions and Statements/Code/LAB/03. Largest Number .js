function largestOfThree(a, b, c) {
    let bigNum;
    if (a >= b && a >= c) {
        bigNum = a;
    } else if (b >= a && b >= c) {
        bigNum = b;
    } else if (c >= a && c >= a) {
        bigNum = c;
    }
    console.log(`The largest number is ${bigNum}.`);
}
largestOfThree(5, -3, 16);
largestOfThree(-3, -5, -22.5);