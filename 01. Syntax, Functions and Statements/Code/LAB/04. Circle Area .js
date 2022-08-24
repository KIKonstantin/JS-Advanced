function circle(input) {
    //If it is a number, assume it is the radius of a circle and calculate the circle area
    if (typeof input === "number") {
        let area = Math.PI * Math.pow(input, 2);
        //Print the area rounded to two decimal places.
        console.log(area.toFixed(2));
    } else {
        //NOT a number, print the following text
        console.log(
            `We can not calculate the circle area, because we receive a ${typeof input}.`
        );
    }
}
circle(5);
circle("name");