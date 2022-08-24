function math(a, b, operator) {
    let result;
    a = +a;
    b = +b;
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "*":
            result = a * b;
            break;
        case "-":
            result = a - b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        case "**":
            result = a ** b;
            break;
    }
    console.log(result);
}
math(5, 6, "+");
math(3, 5.5, "*");