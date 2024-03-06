var timer;
var hour;
var minute;
var second;

document.getElementById('pause').disabled = true;
document.getElementById('resume').disabled = true;
document.getElementById('reset').disabled = true;

function startTimer(){
    var time = document.getElementById('time').value;

    if(time.length == 0){
        alert("Enter Time First...")
        return;
    }

    hour = Number(time.substring(0, 2))%12;
    minute = Number(time.substring(3, 5));
    second = Number(time.substring(7, 9));

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