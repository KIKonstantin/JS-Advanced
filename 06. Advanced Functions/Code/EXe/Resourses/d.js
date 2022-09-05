let a = 0;

function add() {
    a++;
    return a;
}

const b = (function() {
    let c = 0;
    return function() {
        c++;
        return c;
    }
})();

add();
add();
add();
console.log(a);

b();
b();
b()
console.log(b.toString());