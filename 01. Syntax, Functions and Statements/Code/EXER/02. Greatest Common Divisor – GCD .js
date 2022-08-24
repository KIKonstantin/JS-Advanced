function GCD(x = Number, y = Number) {
    if (y) {
        return GCD(y, x % y);
    } else {
        console.log(x);
    }
}
GCD(15, 5);
GCD(2154, 458);