const countDown = ()=>{
    const lastDate = new Date("May 10, 2023 24:00:00").getTime();
    const now = new Date().getTime();
    const difference = lastDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    const timeDay = Math.floor(difference / day);
    const timeHour = Math.floor(difference % day / hour);
    const timeMinutes = Math.floor(difference % hour /minutes);
    const timeSeconds = Math.floor(difference % minutes / seconds);

    document.getElementById("days").innerHTML = timeDay;
    document.getElementById("hours").innerHTML = timeHour;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;
}

setInterval(countDown, 1000);
