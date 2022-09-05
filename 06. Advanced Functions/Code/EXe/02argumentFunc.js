function argumentFunct(...params) {
    let types = {};
    for (let arg of params) {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        if (types[type] === undefined) {
            types[type] = 0;
        }
        types[type]++;
    }
    let result = Object.entries(types).sort((a, b) => b[1] - a[1]);
    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }

    for (const key in types) {
        console.log(key, types[key]);
    }
}
argumentFunct("cat", 42, function() {
    console.log("Hello world!");
});