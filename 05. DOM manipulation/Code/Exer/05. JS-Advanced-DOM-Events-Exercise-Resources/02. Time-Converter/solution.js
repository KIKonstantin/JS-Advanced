function attachEventsListeners() {
    function daysBtnClicked() {
        let days = Number(document.getElementById('days').value);
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;

    }

    function hoursBtnClicked() {
        let hours = document.getElementById('hours').value;
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function minutesBtnClicked() {
        let minutes = document.getElementById('minutes').value;
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    }

    function secondsBtnClicked() {
        let seconds = document.getElementById('seconds').value;
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    }
    let daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', daysBtnClicked);
    let hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', hoursBtnClicked);
    let minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', minutesBtnClicked);
    let secondsBtn = document.getElementById('secondsBtn');
    secondsBtn.addEventListener('click', secondsBtnClicked);
}