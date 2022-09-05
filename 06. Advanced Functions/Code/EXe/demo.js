let store = {
    bread: {
        quantity: 15,
        price: 1.8,
        date: "13.06.2022",
    },
    juice: {
        quantity: 34,
        price: 1.14,
        date: "18.07.2022",
    },
    salami: {
        quantity: 5,
        price: 5.99,
        date: "13.06.2012",
    },
};

function customer(goods, qty) {
    let today = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let [lastDay, lastMonth, expYear] = store[goods].date.split(".");
    lastDay = +lastDay;
    lastMonth = +lastMonth;
    expYear = +expYear;
    let checkPrice = store[goods].price * qty;
    // qty?
    if (store[goods].quantity >= qty) {
        if (expYear > year) {
            store[goods].quantity -= qty;
            console.log(`Your check price is ${checkPrice.toFixed(2)}lv.`);
        } else if ((expYear === year)) {
            if (lastMonth > month) {
                store[goods].quantity -= qty;
                console.log(`Your check price is ${checkPrice.toFixed(2)}lv.`);
            } else if ((lastMonth = month)) {
                if (lastDay >= today) {
                    store[goods].quantity -= qty;
                    console.log(`Your check price is ${checkPrice.toFixed(2)}lv.`);
                } else {
                    console.log(
                        `Sorry we can't sell you this ${goods}, because it's out of date and we care of our customers!`
                    );
                }
            } else {
                console.log(
                    `Sorry we can't sell you this ${goods}, because it's out of date and we care of our customers!`
                );
            }
        } else {
            console.log(
                `Sorry we can't sell you this ${goods}, because it's out of date and we care of our customers`
            );
        }
    } else {
        console.log(`We are waiting for delivery! ${store[goods].quantity > 0 ? `Mind if u take ${store[goods].quantity} instead?` : `Not enough in stock to sell you sir, we are sorry!`}`);
    }

    // date?
    // check
}

function supplier(goods, qty, date) {}
customer("salami", 2);
customer("salami", 1);
customer("salami", 3);