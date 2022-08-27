function city(name, population, treasury) {
    population = +population;
    treasury = +treasury;
    const cityRec = {
        name,
        population,
        treasury,
    };
    return cityRec;
}
city("Tortuga", 7000, 15000);
city("Santo Domingo", 12000, 23500);