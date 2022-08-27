function solve(array) {
    let calorieObj = {};
    while (array.length !== 0) {
        let product = array.shift();
        let calories = array.shift();
        calorieObj[product] = Number(calories);
    }
    console.log(calorieObj);
}
solve(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
solve(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);