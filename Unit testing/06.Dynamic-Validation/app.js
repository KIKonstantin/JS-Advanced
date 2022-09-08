function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);
    let valid = /^[a-z]+@[a-z]+\.[a-z]+$/

    function onChange(e) {
        if (!valid.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}