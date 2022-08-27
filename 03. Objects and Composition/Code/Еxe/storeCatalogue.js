function storeCat(input) {
    let storage = {};
    do {
        let [product, price] = input.shift().split(" : ");
        price = +price;
        let letter = product[0];
        if (!storage.hasOwnProperty(letter)) {
            storage[letter] = {};
        }
        storage[letter][product] = price;
    } while (input.length);
    let sortedLetters = Object.keys(storage).sort();
    for (let letter of sortedLetters) {
        console.log(letter)
        let sortedProduct = Object.keys(storage[letter]).sort();
        for (let product of sortedProduct) {
            console.log(`  ${product}: ${storage[letter][product]}`);
        }
    }
}
storeCat([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);
console.log("================");

storeCat([
    "Banana : 2",
    "Rubic's Cube : 5",
    "Raspberry P : 4999",
    "Rolex : 100000",
    "Rollon : 10",
    "Rali Car : 2000000",
    "Pesho : 0.000001",
    "Barrel : 10",
]);