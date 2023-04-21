const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let segs = dateToday.getSeconds();

    if(hr < 10) hr = "0" + hr;
    if(mins < 10) mins = "0" + mins;
    if(segs < 10) segs = "0" + segs;

    horas.textContent = hr;
    minutos.textContent = mins;
    segundos.textContent = segs;

})