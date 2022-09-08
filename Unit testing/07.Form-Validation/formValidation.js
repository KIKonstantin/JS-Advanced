function validate() {
    let checkBox = document.getElementById("company");
    let userName = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confPass = document.getElementById("confirm-password");
    let companyId = document.getElementById("companyNumber");
    let valid = document.querySelector("#valid");

    document.getElementById("company").addEventListener("change", () => {
        let companyInfo = document.getElementById("companyInfo");
        if (document.getElementById("company").checked == false) {
            companyInfo.style.display = "none";
        } else {
            companyInfo.style.display = "block";
        }
    });

    document.getElementById("submit").addEventListener("click", onClick);

    function onClick(e) {
        e.preventDefault();

        let invalidInput = [];
        let userNamePattern = /^[A-Za-z0-9]{3,20}$/;
        let emailPattern = /(.*)@(.*){1,}\.(.*){1,}/;
        let passPat = /^[\w]{5,15}$/;
        let companyPattern = /^[0-9]{4}$/;
        if (!userNamePattern.test(userName.value)) {
            invalidInput.push(userName);
        }
        if (!emailPattern.test(email.value)) {
            invalidInput.push(email);
        }
        if (!passPat.test(password.value) || confPass.value != password.value) {
            invalidInput.push(password);
            invalidInput.push(confPass);
        }
        if (checkBox.checked) {
            if (!companyPattern.test(companyId.value)) {
                invalidInput.push(companyId);
            }
        }

        invalidInput.forEach((input) => (input.style.borderColor = "red"));
        if (!invalidInput.length) {
            document.querySelectorAll('div input').forEach(i => i.style.borderColor = '');
            valid.style.display = "block";
        } else {
            valid.style.display = "none";
        }
    }
}