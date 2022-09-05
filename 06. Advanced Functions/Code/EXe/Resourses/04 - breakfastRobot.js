function robot() {
    let recepies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 3,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    };

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let commands = {
        restock,
        prepare,
        report,
    };
    return manager;

    function manager(line) {
        const [command, type, qty] = line.split(" ");
        return commands[command](type, qty);
    }

    function restock(type, quantity) {
        quantity = +quantity;
        storage[type] += quantity;
        return "Success";
    }

    function prepare(recepieAsStr, quantity) {
        quantity = +quantity;
        // find recepie
        const recepie = Object.entries(recepies[recepieAsStr]);
        // calculate total ingridient quantity
        recepie.forEach((i) => (i[1] *= quantity));
        // compare one by one with in stock
        for (let [ingridient, required] of recepie) {
            if (storage[ingridient] < required) {
                return `Error: not enough ${ingridient} in stock`;
            }
        }
        recepie.forEach(
            ([ingridient, required]) => (storage[ingridient] -= required)
        );
        return "Success";
    }

    function report() {
        return `protein=${storage["protein"]} carbohydrate=${storage["carbohydrate"]} fat=${storage["fat"]} flavour=${storage["flavour"]}`;
    }
}

let manager = robot();
console.log(manager("restock flavour 50000"));
console.log(manager("restock fat 50"));
console.log(manager("restock carbohydrate 50"));
console.log(manager("restock protein 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("report"));