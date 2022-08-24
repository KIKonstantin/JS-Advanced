function fruits(fruit, weight, prise) {
    weight = Number(weight / 1000);
    prise = Number(prise * weight);
    console.log(`I need $${prise.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}
fruits("orange", 2500, 1.8);