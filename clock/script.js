const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

function executeClock(){
    const date = new Date();
    console.log(date);
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log(`Hour: ${hr}, Minutes: ${min}, Seconds: ${sec}`)
    
    let posicaoHr = (hr*360/12)+(min*(360/60)/12)
    let posicaoMin = (min * 360/60) + (sec*(360/60)/60)
    let posicaoSeg = sec * 360/60
    
    
    
    PONTEIROHORA.style.transform = "rotate(" + posicaoHr +"deg";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin +"deg";
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg +"deg";
}

const interval = setInterval(executeClock, 1000)

let digitalHour = document.getElementById("digitalHour").innerHTML = "Hello Clock!"