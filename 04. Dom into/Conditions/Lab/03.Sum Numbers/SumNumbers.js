function calc() {
    // TODO: sum = num1 + num2
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = Number(num1) + Number(num2);
    document.getElementById("sum").value = result;
    num1.style.display = "none";
    num2.style.display = "none";
}