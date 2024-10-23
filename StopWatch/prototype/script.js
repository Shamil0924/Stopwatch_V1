
let StartBTN = document.getElementById("Start");
let StopBTN = document.getElementById("Stop");
let ResetBTN = document.getElementById("Reset");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let hours = document.getElementById("hours");
let sec = 0;
let min = 0;
let hou = 0;
let intervall;
let milisecondsINSeconds = 1000;


function SetGD () {
    seconds.innerText = sec + "";
    minutes.innerText = min + "";
    hours.innerText = hou + "";
}

function makePretty (inputNUM) {
    if (Number(inputNUM) < 10) {
        inputNUM = "0" + inputNUM;
    }
    return inputNUM;
}

    

function Start() {
    
    
    intervall = setInterval(function() {
        sec++;
        sec = makePretty(sec);
        makePretty(min);
        makePretty(hou);
        if (sec > 59) {
            min++;
            sec = 0;
            sec = makePretty(sec);
            seconds.innerText = sec + "";
            min = makePretty(min);
            minutes.innerText = min + "";
        }
        if (min > 59) {
            hou++;
            min = 0;
            sec = 0;
            min = makePretty(min);
            minutes.innerText = min + "";
            hou = makePretty(hou);
            hours.innerText = hou + "";
        }
        seconds.innerText = sec + "";
    },milisecondsINSeconds)
    
    
}

function Stop() {
    clearInterval(intervall);

}


function Reset() {
    clearInterval(intervall);
    sec = 0;
    min = 0;
    hou = 0;
    sec = makePretty(sec);
    min = makePretty(min);
    hou = makePretty(hou);
    SetGD();

}