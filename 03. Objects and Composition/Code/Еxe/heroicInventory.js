function heroic(input) {
    let result = [];
    while (input.length > 0) {
        let [name, level, items] = input
            .shift()
            .split("/")
            .map((x) => x.trim());
        level = Number(level);
        items = items ? items.split(", ") : [];
        result.push({ name, level, items });
    }
    console.log(JSON.stringify(result));
}
heroic([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroic(["Jake / 1000 / Gauss, HolidayGrenade"]);