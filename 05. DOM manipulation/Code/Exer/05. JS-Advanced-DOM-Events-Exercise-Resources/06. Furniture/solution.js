function solve() {
    const [generateBtn, buyBtn] = Array.from(document.querySelectorAll("button"));
    const [input, output] = Array.from(document.querySelectorAll("textarea"));
    const tbody = document.querySelector("tbody");

    generateBtn.addEventListener("click", generate);
    buyBtn.addEventListener("click", buy);

    const items = [];

    // parse input JSON and create table
    // -- find input textarea
    // -- parse JSON

    function generate() {
        const data = JSON.parse(input.value);
        // -- for every item
        for (let item of data) {
            // ---create row
            // --- append row to table body
            const row = document.createElement("tr");

            row.appendChild(createColumn("img", item.img)); //  <---Image column
            row.appendChild(createColumn("p", item.name)); // <--- name column
            row.appendChild(createColumn("p", item.price)); //  <--- price column
            row.appendChild(createColumn("p", item.decFactor)); // <--- decoration column

            // input column -->
            const c5 = document.createElement("td");
            const chechbox = document.createElement("input");
            chechbox.type = "checkbox";
            c5.appendChild(chechbox);
            row.appendChild(c5);

            tbody.appendChild(row);

            items.push({
                ...item,
                isChecked
            });

            function isChecked() {
                return chechbox.checked;
            }
        }
    }

    // find user choices and summarize purchase
    // -- find all checked boxes
    // -- read data from parent row
    // ---- append to result
    // -- output result to textarea


    function buy() {
        let list = [];
        let total = 0;
        let decoration = 0;

        const bought = items.filter((i) => i.isChecked());

        for (let item of bought) {
            list.push(item.name);
            total += Number(item.price);
            decoration += Number(item.decFactor);
        }
        decoration /= bought.length;
        output.value = [
            `Bought furniture:${list.join(", ")}`,
            `Total price: ${total.toFixed(2)}`,
            `Average decoration factor: ${decoration}`,
        ].join("\n");
    }

    function createColumn(type, content) {
        const result = document.createElement("td");
        let inner;
        if (type == "img") {
            inner = document.createElement("img");
            inner.src = content;
        } else {
            inner = document.createElement("p");
            inner.textContent = content;
        }
        result.appendChild(inner);

        return result;
    }
}