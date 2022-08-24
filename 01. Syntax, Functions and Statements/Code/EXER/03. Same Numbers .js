function sameNumbers(num) {
    let input = String(num);
    let isSame = true;
    let sum = 0;

    let firstDig = input[0];
    for (let index = 0; index < input.length; index++) {
        let curDigit = +input[index];
        sum += curDigit;
        if (firstDig != curDigit) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(1234);