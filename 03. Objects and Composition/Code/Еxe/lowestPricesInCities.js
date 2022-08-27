function lowestPricesInCities(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        let [town, product, price] = input[i].split(' | ');
        price = Number(price);
        if (!obj.hasOwnProperty(product)) {
            obj[product] = { price, town };
        } else {
            if (obj[product].price > price) {
                obj[product] = { price, town };
            }
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key].price} (${obj[key].town})`)
    }
}
lowestPricesInCities([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);