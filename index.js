var timer;
var hour;
var minute;
var second;

document.getElementById('pause').disabled = true;
document.getElementById('resume').disabled = true;
document.getElementById('reset').disabled = true;

function startTimer(){

    hour = Number(document.getElementById('hour').value);
    minute = Number(document.getElementById('minute').value);
    second = Number(document.getElementById('second').value);

    if(hour == '' || minute == '' || second == ''){
        alert("Plese select all the parameters of time");
        return;
    }

    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('reset').disabled = false;

    timer = setInterval(function(){
        if(second == 0){
            second = 59;
            
            if(minute == 0){
                minute = 59;

                if(hour == 0){
                    alert("Time is up...");
                    return;
                }else{
                    hour--;
                }
            }else{
                minute--;
            }
        }else{
            second--;
        }

        document.getElementById('timer').innerHTML = hour + "h " + minute + "m " + second + "s";
    }, 1000);
}

function pauseTimer(){
    document.getElementById('pause').disabled = true;
    document.getElementById('resume').disabled = false;

    clearInterval(timer);
}

function resumeTimer(){
    document.getElementById('resume').disabled = true;
    document.getElementById('pause').disabled = false;

    timer = setInterval(function(){
        if(second == 0){
            second = 59;
            
            if(minute == 0){
                minute = 59;

                if(hour == 0){
                    alert("Time is up...");
                    return;
                }else{
                    hour--;
                }
            }else{
                minute--;
            }
        }else{
            second--;
        }

        document.getElementById('timer').innerHTML = hour + "h " + minute + "m " + second + "s";
    }, 1000);
}

function resetTimer(){
    document.getElementById('pause').disabled = true;
    document.getElementById('resume').disabled = true;
    document.getElementById('reset').disabled = true;
    document.getElementById('start').disabled = false;

    clearInterval(timer);

    document.getElementById('timer').innerHTML = "0h 0m 0s";
}