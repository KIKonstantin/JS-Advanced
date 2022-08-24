function sqareOfStars(input) {
    let line = "";
    if (input >= 1) {
        for (let i = 0; i < input; i++) {
            line = "";
            for (let j = 0; j < input - 1; j++) {
                line += "* "
            }
            console.log(line + "*");
        }
    } else {
        for (let i = 0; i < 5; i++) {
            line = "";
            for (let j = 0; j < 4; j++) {
                line += "* "
            }
            console.log(line + "*");
        }
    }
}
sqareOfStars(10)