function nthEl(arr, num) {
    let newArr = [];
    num = Number(num);
    for (let i = 0; i < arr.length; i += num) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(nthEl(["5", "20", "31", "4", "20"], 2));
console.log(nthEl(["dsa", "asd", "test", "tset"], 2));
console.log(nthEl(["1", "2", "3", "4", "5"], 6));