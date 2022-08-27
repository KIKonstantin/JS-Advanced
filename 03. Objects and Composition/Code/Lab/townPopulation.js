function townPop(strArr) {
    const cityPop = {};
    for (const el of strArr) {
        let [nameOfTown, population] = el.split(" <-> ");
        population = +population;
        if (cityPop[nameOfTown] !== undefined) {
            population += cityPop[nameOfTown];
            cityPop[nameOfTown] = population;
        } else {
            cityPop[nameOfTown] = population;
        }
    }
    for (const key in cityPop) {
        console.log(`${key} : ${cityPop[key]}`);
    }
}

console.log("-----");
townPop([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);