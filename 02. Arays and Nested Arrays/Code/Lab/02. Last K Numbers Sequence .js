function kNums(n, k) {
    let fibo = [1];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        sum += fibo[i];
        fibo.push(sum);
        console.log(sum);
    }

}
kNums(6, 3);
kNums(8, 2);