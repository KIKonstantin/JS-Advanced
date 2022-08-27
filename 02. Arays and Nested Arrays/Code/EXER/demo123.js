const town = {
    name: 'New York',
    population: 5200000,
    statue: "Statue of Liberty",
    fireworks() {
        console.log(`${this.name} celebrates with fireworks *☼*☼*☼* at ${this.statue}`);
    }
};
town.fireworks();

const country = {
    name: 'Bulgaria',
    population: 6700000,
    statue: 'Khan Asparuh'
};
myFunc = town.fireworks;
country.fireworks = myFunc;
country.fireworks();