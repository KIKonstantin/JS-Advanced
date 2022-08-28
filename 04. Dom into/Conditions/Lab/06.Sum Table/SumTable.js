function sumTable() {
    // select all data rows (exclude first and last row)
    const rows = Array.from(document.querySelectorAll("tr")).slice(1, -1);
    let sum = 0;
    const total = Array.from(document.querySelectorAll("tr")).slice(-1, 0);

    //for each row
    // -- select last column
    // -- add content to sum
    for (let row of rows) {
        let price = Number(row.lastElementChild.textContent);
        sum += price;
    }
    // display sum in total row
    document.getElementById('sum').textContent = sum;
}