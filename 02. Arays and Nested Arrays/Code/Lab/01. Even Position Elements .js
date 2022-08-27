function evenPositions(input) {
    let filtered = input.filter((el, index) => index % 2 == 0);
    console.log(filtered.join(" "));
}
evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);