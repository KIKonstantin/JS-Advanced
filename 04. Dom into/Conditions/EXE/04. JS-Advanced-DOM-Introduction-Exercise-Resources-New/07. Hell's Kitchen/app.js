function solve() {
    document.querySelector("#btnSend").addEventListener("click", onClick);
    //["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
    function onClick() {
        let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
        let restaurants = {};
        for (let el of input) {
            let [restaurant, workers] = el.split(" - ");

            for (let worker of workers) {
                let [employee, salary] = worker.split(" ");
                console.log(employee, salary);
                console.log(JSON.stringify(restaurants));
            }
        }
    }
}