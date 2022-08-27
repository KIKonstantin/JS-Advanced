function townsToJSON(array) {
    let result = [];
    array.shift();
    for (let i = 0; i < array.length; i++) {
        let line = array[i]
            .split("|")
            .map((e) => e.trim())
            .filter((x) => x.length > 0);
        let town = line[0];
        let latitude = Number(line[1]).toFixed(2);
        let longitude = Number(line[2]).toFixed(2);
        result.push({
            Town: town,
            Latitude: Number(latitude),
            Longitude: Number(longitude),
        });
    }
    console.log(JSON.stringify(result));
}
townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
]);
townsToJSON([
    "| Town | Latitude | Longitude |",
    "| Veliko Turnovo | 43.0757 | 25.6172 |",
    "| Monatevideo | 34.50 | 56.11 |",
]);