function stringLength(a, b, c) {
    //sum of the length
    let sum = a.length + b.length + c.length;
    console.log(sum);
    // average length of the strings rounded down
    let avgLength = Math.floor(sum / 3);
    console.log(avgLength);
}
stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");