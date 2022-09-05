function calculator() {
    let field1 = null;
    let field2 = null;
    let result = null;
    return {
        init,
        add,
        substract
    };

    function init(f1, f2, fr) {
        field1 = document.querySelector(f1);
        field2 = document.querySelector(f2);
        result = document.querySelector(fr);
    }

    function add() {
        result.value = Number(field1.value) + Number(field2.value);
    }

    function substract() {
        result.value = Number(field1.value) - Number(field2.value);
    }
}