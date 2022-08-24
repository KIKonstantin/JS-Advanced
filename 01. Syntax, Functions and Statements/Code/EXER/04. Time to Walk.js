function walking(steps, footprint, speed) {
    let distanceInMeters = steps * footprint;
    let speedMetersPerSec = speed / 3.6;
    let time = distanceInMeters / speedMetersPerSec;
    let rest = Math.floor(distanceInMeters / 500);

    // h:m:s

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHr = Math.floor(time / 3600);

    console.log(
        (timeHr < 10 ? "0" : "") +
        timeHr +
        ":" +
        (timeMin + rest < 10 ? "0" : "") +
        (timeMin + rest) +
        ":" +
        (timeSec < 10 ? "0" : "") +
        timeSec
    );
}
walking(4000, 0.6, 5);
walking(2564, 0.70, 5.5)