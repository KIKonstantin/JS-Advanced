function subtract() {
    let firstNum = document.getElementById("firstNumber").value; //firstNumber
    let secondNum = document.getElementById("secondNumber").value; //secondNumber
    let resultEl = document.getElementById('result')
    resultEl.textContent = Number(firstNum) - Number(secondNum);
}